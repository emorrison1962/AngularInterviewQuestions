import { QuestionService } from './../../../shared/services/question.service';
import { Question, CodeSnippets } from './../../../shared/models/question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //questions: Array<Question>;
  questions: Array<Question>;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    //.map(q => { return new Question(q) });
    //.filter(q => { return q.question.Snippets.HasSnippets; });

    // var json = JSON.stringify(this.questions)
    // console.log(json);

    new Object();
  }

}
