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

		public Question(string category, string text)
		{
			if (string.IsNullOrEmpty(category))
				throw new ArgumentException("category IsNullOrEmpty.");
			if (string.IsNullOrEmpty(text))
				throw new ArgumentException("text IsNullOrEmpty.");
			this.Category = category;
			this.Text = text;
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

	}
}
