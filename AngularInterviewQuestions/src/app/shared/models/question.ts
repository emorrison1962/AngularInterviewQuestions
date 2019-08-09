

// Generated by Typewriter.
// More info: http://frhagn.github.io/Typewriter/

// $Classes/Enums/Interfaces(filter)[template][separator]
// filter (optional): Matches the name or full name of the current item. * = match 
// any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
// template: The template to repeat for each matched item
// separator (optional): A separator template that is placed between all templates 
// e.g. $Properties[public $name: $Type][, ]

/* tslint:disable:no-inferrable-types*/




export interface ICodeSnippets {

    TypeScriptSnippet: string
    CssSnippet: string
    HtmlSnippet: string
    HasSnippets: boolean
}

export class CodeSnippets implements ICodeSnippets {

    TypeScriptSnippet: string = null;
    CssSnippet: string = null;
    HtmlSnippet: string = null;
    HasSnippets: boolean = null !== this.TypeScriptSnippet || null !== this.CssSnippet || null !== this.HtmlSnippet;

    constructor(src?: ICodeSnippets) {
        if (src) {
            this.TypeScriptSnippet = src.TypeScriptSnippet;
            this.CssSnippet = src.CssSnippet;
            this.HtmlSnippet = src.HtmlSnippet;
            this.HasSnippets = src.HasSnippets;
        }
    }

    static fromJson(data: any): CodeSnippets {
        let result = new CodeSnippets();
        Object.assign(result, data);
        return result;
    }

}
export interface IQuestion {

    QuestionId: number
    Text: string
    Category: string
    Snippets: CodeSnippets
    Answers: Answer[]
}

export class Question implements IQuestion {

    QuestionId: number = 0;
    Text: string = null;
    Category: string = null;
    Snippets: CodeSnippets = null;
    Answers: Answer[] = [];

    constructor(src?: IQuestion) {
        if (src) {
            this.QuestionId = src.QuestionId;
            this.Text = src.Text;
            this.Category = src.Category;
            this.Snippets = src.Snippets;
            this.Answers = src.Answers;
        }
    }

    static fromJson(data: any): Question {
        let result = new Question();
        Object.assign(result, data);
        return result;
    }

}


export interface IAnswer {

    AnsweerId: number
    QuestionId: number
    Snippets: CodeSnippets
    Text: string
}

export class Answer implements IAnswer {

    AnsweerId: number = 0;
    QuestionId: number = 0;
    Snippets: CodeSnippets = null;
    Text: string = null;

    constructor(src?: IAnswer) {
        if (src) {
            this.AnsweerId = src.AnsweerId;
            this.QuestionId = src.QuestionId;
            this.Snippets = src.Snippets;
            this.Text = src.Text;
        }
    }

    static fromJson(data: any): Answer {
        let result = new Answer();
        Object.assign(result, data);
        return result;
    }

}





