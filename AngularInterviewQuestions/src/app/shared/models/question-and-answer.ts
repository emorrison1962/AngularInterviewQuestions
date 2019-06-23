import { Question, Answer } from './question';

export class QuestionAndAnswer {
    //#region Properties
    // get questionText(): string {
    //     return this.question.Text;
    // }

    // get questionCode(): string {
    //     return this.question.Code.join("\r\n");
    // }




    // get answer(): string {
    //     return this._answer;
    // }
    // set answer(input: string) {
    //     this._answer = input.trim();
    // }
    // get htmlSnippet(): string {
    //     return this._htmlSnippet;
    // }
    // set htmlSnippet(input: string) {
    //     this._htmlSnippet = input.trim();
    // }
    // get codeSnippet(): string {
    //     return this._codeSnippet;
    // }
    // set codeSnippet(input: string) {
    //     this._codeSnippet = input.trim();
    // }

    get isNotAnswered(): boolean {
        var result = false;
        // if (null == this.htmlSnippet
        //     && null == this.codeSnippet
        //     && null == this.answer) {
        //     result = true;
        // }
        return result;
    }

    //#endregion Properties

    //#region Construction
    constructor(public question: Question = null, public answer: Answer = null) {
    }
    //#endregion 

}//class
