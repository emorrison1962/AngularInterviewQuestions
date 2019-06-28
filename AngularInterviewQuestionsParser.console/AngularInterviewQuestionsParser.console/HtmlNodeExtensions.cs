using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace AngularInterviewQuestionsParser.console
{
	public static class HtmlNodeExtensions
	{
		static public IEnumerable<HtmlNode> ByClass(this IEnumerable<HtmlNode> nodes, string classname)
		{
			var seq = nodes.Where(x => x.HasAttributes);
			var result = seq.Where(x =>
				x.Attributes.Where(a => "class" == a.Name && a.Value.Contains(classname)).FirstOrDefault() != null);

#if false
foreach (var div in seq)
{
foreach (var att in div.Attributes)
{
if (att.Name == "class")
{
//Debug.WriteLine(att.Value);
if (att.Value.IndexOf("ingredient") > 0)
{
new object();
}
}
}
}

#endif
			return result;
		}
		static public IEnumerable<HtmlNode> ByID(this IEnumerable<HtmlNode> nodes, string id)
		{
			var seq = nodes.Where(x => x.HasAttributes);
			var result = seq.Where(x =>
				x.Attributes.Where(a => "id" == a.Name && a.Value.Contains(id)).FirstOrDefault() != null);

#if false
foreach (var div in seq)
{
foreach (var att in div.Attributes)
{
if (att.Name == "id")
{
Debug.WriteLine(att.Value);
if (att.Value.IndexOf("ingredient") > 0)
{
new object();
}
}
}
}

#endif
			return result;
		}

		static public string FromHtml(this string innerText)
		{
			var result = WebUtility.HtmlDecode(innerText);
			result = result.Trim();
			return result;
		}

		static public HtmlNode GetNode(this HtmlNode parent, string nodeType, string className = null)
		{
			var result = parent.GetNodes(nodeType, className).FirstOrDefault();
			return result;
		}

		static public List<HtmlNode> GetNodes(this HtmlNode parent, string nodeType, string className = null)
		{
			var result = parent.Descendants(nodeType).ToList();
			if (null != className)
			{
				result = result.ByClass(className).ToList();
			}

			return result;
		}

		#region HtmlDocument Extensions

		static public HtmlNode GetNode(this HtmlDocument doc, string nodeType, string className = null)
		{
			var result = doc.GetNodes(nodeType, className).FirstOrDefault();
			return result;
		}

		static public List<HtmlNode> GetNodes(this HtmlDocument doc, string nodeType, string className = null)
		{
			var result = doc.DocumentNode.Descendants(nodeType).ToList();
			if (null != className)
			{
				result = result.ByClass(className).ToList();
			}
			return result;
		}

		#endregion

	}//class
}

