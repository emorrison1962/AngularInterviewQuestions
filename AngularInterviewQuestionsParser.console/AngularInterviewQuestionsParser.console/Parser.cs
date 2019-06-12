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
    class Category
    {
        public string Name { get; set; }
        public List<Question> Questions { get; set; } = new List<Question>();

        public Category(string name)
        {
            if (string.IsNullOrEmpty(name))
                throw new ArgumentException("name IsNullOrEmpty.");
            this.Name = name;
        }
    }
    class Question
    {
        public string Text { get; set; }
        public List<string> Code { get; set; } = new List<string>();

        public Question(string text)
        {
            if (string.IsNullOrEmpty(text))
                throw new ArgumentException("text IsNullOrEmpty.");

            this.Text = text;
        }
    }
    class Parser
    {
        HtmlDocument Doc { get; set; }
        Category CurrentCategory { get { return this.Categories.Last(); } }
        List<Category> Categories { get; set; } = new List<Category>();

        public List<Category> Parse(string html)
        {
            var doc = new HtmlDocument();
            doc.LoadHtml(html);

            this.Doc = doc;

            var body = this.Doc.DocumentNode.Descendants().Where(x => x.Name == "body").First();
            var nodes = body.Descendants().ToList();
            foreach (var node in nodes)
            {
                //Debug.WriteLine(node);
                new object();

                if (node.Name == "h4")
                {
                    this.Categories.Add(new Category(node.InnerText.Replace(" Questions:", string.Empty).Trim()));
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
                            this.CurrentCategory.Questions.Add(new Question(li.InnerText.Trim()));
                        }
                    }
                }

                else if (node.Name == "pre")
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

                        //Debug.WriteLine(child.XPath);
                        new object();

                    }

                    this.CurrentCategory.Questions.Last().Code.Add(sb.ToString());

                    //Debug.WriteLine(sb.ToString());
                    sb.Clear();
                    //Debug.WriteLine(string.Empty);
                    new object();
                }
            }



            new object();
            return this.Categories;
        }
    }//class
}//ns
