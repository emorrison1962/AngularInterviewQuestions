using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularInterviewQuestions.Models
{
	public class CodeSnippets
	{
		public string TypeScriptSnippet { get; set; }
		public string CssSnippet { get; set; }
		public string HtmlSnippet { get; set; }
		public bool HasSnippets
		{
			get
			{
				return !string.IsNullOrEmpty(TypeScriptSnippet)
					|| !string.IsNullOrEmpty(CssSnippet)
					|| !string.IsNullOrEmpty(HtmlSnippet);
			}
		}

		public CodeSnippets()
		{
			this.HtmlSnippet = "<div *ngIf='someObservableData | async as data; else loading'>{{data}}</div>\r\n\r\n<ng-template #loading>\r\nLoading Data...\r\n</ng-template>";

			this.CssSnippet = ":host-context(.theme-light) h2 {\r\n            background-color: red;\r\n}";
			this.TypeScriptSnippet = "import { Component, ContentChildren, Directive, Input, QueryList } from '@angular/core';\r\n\r\n@Directive({selector: 'pane'})\r\nexport class Pane {\r\n@Input() id: string;\r\n}\r\n\r\n@Component({\r\nselector: 'tab',\r\ntemplate: `\r\n    <div>panes: {{serializedPanes}}</div>\r\n  `\r\n})\r\nexport class Tab {\r\n@ContentChildren(Pane) panes: QueryList<Pane>;\r\n            get serializedPanes(): string { return this.panes ? this.panes.map(p => p.id).join(', ') : ''; }\r\n}\r\n\r\n@Component({\r\nselector: 'example-app',\r\ntemplate: `\r\n    <tab>\r\n      <pane id=\"1\"></pane>\r\n      <pane id=\"2\"></pane>\r\n      <pane id=\"3\" *ngIf=\"shouldShow\"></pane>\r\n    </tab>\r\n    <button (click)=\"show()\">Show 3</button>\r\n  `,\r\n})\r\nexport class ContentChildrenComp {\r\nshouldShow = false;\r\nshow() { this.shouldShow = true; }\r\n}";

		}

		public override string ToString()
		{
			var sb = new StringBuilder();
			if (null != this.TypeScriptSnippet)
				sb.AppendLine($"*.ts{Environment.NewLine}{this.TypeScriptSnippet}");
			if (null != this.CssSnippet)
				sb.AppendLine($"*.css{Environment.NewLine}{this.CssSnippet}");
			if (null != this.HtmlSnippet)
				sb.AppendLine($"*.html{Environment.NewLine}{this.HtmlSnippet}");

			return sb.ToString();
		}
	}

	public class Question
	{
		static int _nextInstanceId = 0;
		int _instanceId = ++_nextInstanceId;

		public int QuestionId { get; set; } = _nextInstanceId;
		public string Text { get; set; }
		public string Category { get; set; }
		public CodeSnippets Snippets { get; set; } = new CodeSnippets();
		public List<Answer> Answers { get; set; } = new List<Answer>();

		public Question(string category, string text)
		{
			if (string.IsNullOrEmpty(category))
				throw new ArgumentException("category IsNullOrEmpty.");
			if (string.IsNullOrEmpty(text))
				throw new ArgumentException("text IsNullOrEmpty.");
			this.Category = category;
			this.Text = text;
			this.Answers.Add(new Answer());
			this.Snippets = new CodeSnippets();
		}
	}

	public class Answer
	{
		static int _nextInstanceId = 0;
		int _instanceId = ++_nextInstanceId;

		public int AnsweerId { get; set; } = _nextInstanceId;
		public int QuestionId { get; set; } = 0;

		public CodeSnippets Snippets { get; set; } = new CodeSnippets();
		public string Text { get; set; }

		public Answer()
		{
			this.Text = $"{_instanceId} This is an answer to a very important questionn.";
			this.Snippets = new CodeSnippets();
		}

	}
}
