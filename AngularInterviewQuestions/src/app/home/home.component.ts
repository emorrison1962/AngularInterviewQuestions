import { Question } from './../shared/models/question';
import { QuestionService } from './../shared/services/question.service';
import { Component, OnInit } from '@angular/core';
import { TocItem } from '../shared/models/toc-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  devLink = new TocItem("stub", "*** Dev Stub ***");


  tocItems =
    [new TocItem("animations-questions", "Animations Questions"),
    new TocItem("architecture-questions", "Architecture Questions"),
    new TocItem("api-questions", "API Questions"),
    new TocItem("template-syntax-questions", "Template Questions"),
    new TocItem("component-questions", "Component Questions"),
    new TocItem("component-interaction--state-management-questions", "Component Interaction & amp; State Management Questions"),
    new TocItem("forms-questions", "Forms Questions"),
    new TocItem("general-questions", "General Questions"),
    new TocItem("ngmodules-questions", "NgModules Questions"),
    new TocItem("observables-rxjs-questions", "Observables RxJS Questions"),
    new TocItem("performance-questions", "Performance Questions"),
    new TocItem("pipes-questions", "Pipes Questions"),
    new TocItem("router-questions", "Router Questions"),
    new TocItem("services-questions", "Services Questions"),
    new TocItem("structural-directives-questions", "Structural Directives Questions"),
    new TocItem("styling-questions", "Styling Questions"),
    new TocItem("style-guide-questions", "Style Guide Questions"),
    new TocItem("testing-questions", "Testing Questions"),
    new TocItem("typescript-questions", "TypeScript Questions"),
    new TocItem("javascript-questions", "JavaScript Questions"),
    new TocItem("coding-questions", "Coding Questions"),
    new TocItem("fun-questions", "Fun Questions"),
    new TocItem("lifecycle", "Lifecycle Hooks Questions"),
    new TocItem("security", "Security Questions")];

  questions: Array<Question>;


  constructor(private questionService: QuestionService) { }

  ngOnInit() {

    this.questions = this.questionService.getQuestions();

    this.tocItems.sort((a: TocItem, b: TocItem) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    });
  }

}
