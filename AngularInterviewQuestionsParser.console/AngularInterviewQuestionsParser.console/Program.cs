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

            var categories= p.Parse(Resource.Angular_Interview_Questions);
            foreach (var c in categories)
            {
                Debug.WriteLine($"{c.Name}:");
                Debug.Indent();
                foreach (var q in c.Questions)
                {
                    Debug.WriteLine($"{q.Text}");
                    foreach (var code in q.Code)
                    {
                        Debug.WriteLine($"\r\n\t{code}");
                    }
                }
                Debug.Unindent();
            }
            new object();

            var json = Newtonsoft.Json.JsonConvert.SerializeObject(categories);
            Debug.WriteLine(json);
        }

    }//class
}//ns
