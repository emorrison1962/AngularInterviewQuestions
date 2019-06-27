import { QuestionAndAnswer } from './../../../shared/models/question-and-answer';
import { QuestionService } from './../../../shared/services/question.service';
import { Question, CodeSnippets } from './../../../shared/models/question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  questions: Array<Question>;
  questionsAndAnswers: Array<QuestionAndAnswer>;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionsAndAnswers = this.questionService.getQuestions()
      .map(q => { return new QuestionAndAnswer(q) })
      .filter(q => { return q.question.Snippets.HasSnippets; });
    new Object();
  }

}
