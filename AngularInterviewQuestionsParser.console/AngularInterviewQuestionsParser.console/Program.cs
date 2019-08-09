using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularInterviewQuestionsParser.console
{
    class Program
    {
        static void Main(string[] args)
        {
            new Program().MainImpl(args);
        }

        void MainImpl(string[] args)
        {
            var p = new Parser();

            var questions= p.Parse(Resource.Angular_Interview_Questions);
            foreach (var q in questions)
            {
				//Debug.WriteLine($"{q}");
				//q.Snippets.CssSnippet = string.Empty;
				//q.Snippets.HtmlSnippet = string.Empty;
				//q.Snippets.TypeScriptSnippet = string.Empty;
            }

            var json = Newtonsoft.Json.JsonConvert.SerializeObject(questions.Take(5), Newtonsoft.Json.Formatting.Indented);
            Debug.WriteLine(json);
			new object();
		}

	}//class
}//ns
