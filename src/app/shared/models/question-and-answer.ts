export class QuestionAndAnswer {

    //#region Properties
    get question(): string {
        return this._question;
    }
    set question(input: string) {
        this._question = input.trim();
    }

    get answer(): string {
        return this._answer;
    }
    set answer(input: string) {
        this._answer = input.trim();
    }
    get htmlSnippet(): string {
        return this._htmlSnippet;
    }
    set htmlSnippet(input: string) {
        this._htmlSnippet = input.trim();
    }
    get codeSnippet(): string {
        return this._codeSnippet;
    }
    set codeSnippet(input: string) {
        this._codeSnippet = input.trim();
    }
    //#endregion Properties

    //#region Construction
    constructor(private _question: string = null,
        private _answer: string = null,
        private _htmlSnippet: string = null,
        private _codeSnippet: string = null) {
    }
    //#endregion 

}//class
