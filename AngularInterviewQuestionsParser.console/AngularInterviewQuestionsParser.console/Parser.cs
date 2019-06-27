using AngularInterviewQuestions.Models;
using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace AngularInterviewQuestionsParser.console
{
	public class Category
	{
		public string Name { get; set; }
		public List<Question> Questions { get; set; } = new List<Question>();

		[Obsolete("", true)]
		public Category(string name)
		{
			if (string.IsNullOrEmpty(name))
				throw new ArgumentException("name IsNullOrEmpty.");
			this.Name = name;
		}
	}
	class Parser
	{
		HtmlDocument Doc { get; set; }

		public List<Question> Parse(string html)
		{
			var doc = new HtmlDocument();
			doc.LoadHtml(html);
			this.Doc = doc;

			var result = new List<Question>();

			var body = this.Doc.DocumentNode.Descendants().Where(x => x.Name == "body").First();
			var nodes = body.Descendants().ToList();
			string category = null;
			foreach (var node in nodes)
			{
				//Debug.WriteLine(node);
				new object();
				if (node.Name == "h4")
				{
					category = node.InnerText.Replace(" Questions:", string.Empty).Trim();
					new object();
				}

				else if (node.Name == "ul")
				{
					var lis = node.Descendants().Where(x => x.Name == "li").ToList();
					foreach (var li in lis)
					{
						new object();

						if (li.InnerText.Trim() != string.Empty)
						{
							//Debug.WriteLine($"{this.CurrentCategory}: {li.InnerText.Trim()}");
							result.Add(new Question(category, li.InnerText.Trim()));
						}
					}
				}

				else if (node.Name == "pre")
				{
					result.Last().Snippets = this.GetCodeSnippets(node);

					//var sb = new StringBuilder();
					//var children = node.Descendants().ToList();
					//foreach (var child in children)
					//{
					//    var decoded = WebUtility.HtmlDecode(child.InnerText);
					//    //Debug.WriteLine(child.Name);
					//    if (child.Name == "span")
					//        sb.Append(string.Empty);
					//    else if (child.Name == "#text")
					//        sb.Append(decoded);

					//    //Debug.WriteLine(child.XPath);
					//    new object();

					//}

					//this.CurrentCategory.Questions.Last().Code.Add(sb.ToString());

					////Debug.WriteLine(sb.ToString());
					////Debug.WriteLine(string.Empty);
					//sb.Clear();
					new object();
				}
			}


			new object();
			return result;
		}

		CodeSnippets GetCodeSnippets(HtmlNode node)
		{
			const string TYPESCRIPT = "highlight-source-ts";
			const string CSS = "highlight-source-css";
			const string HTML = "highlight-text-html-basic";

			var result = new CodeSnippets();

			if (node.Name == "pre")
			{
				var sb = new StringBuilder();
				var children = node.Descendants().ToList();
				foreach (var child in children)
				{
					var decoded = WebUtility.HtmlDecode(child.InnerText);
					//Debug.WriteLine(child.Name);
					if (child.Name == "span")
						sb.Append(string.Empty);
					else if (child.Name == "#text")
						sb.Append(decoded);

					new object();
				}

				if (node.ParentNode.HasClass(TYPESCRIPT))
				{
					result.TypeScriptSnippet = sb.ToString();
				}
				else if (node.ParentNode.HasClass(CSS))
				{
					result.CssSnippet = sb.ToString();
				}
				else if (node.ParentNode.HasClass(HTML))
				{
					result.HtmlSnippet = sb.ToString();
				}
				//Debug.WriteLine(sb.ToString());


				//Debug.WriteLine(sb.ToString());
				sb.Clear();
				//Debug.WriteLine(string.Empty);
				new object();
			}

			return result;
		}


	}//class
}//ns

