import { CategoryComponent } from './questions/_debug/category/category.component';
import { QuestionService } from './shared/services/question.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AnimationsComponent } from './questions/animations/animations.component';
import { ArchitectureComponent } from './questions/architecture/architecture.component';
import { ApiQuestionsComponent } from './questions/api-questions/api-questions.component';
import { TemplateSyntaxComponent } from './questions/template-syntax/template-syntax.component';
import { KomponentComponent } from './questions/komponent/komponent.component';
import { ComponentInteractionComponent } from './questions/component-interaction/component-interaction.component';
import { FormsComponent } from './questions/forms/forms.component';
import { GeneralQuestionsComponent } from './questions/general-questions/general-questions.component';
import { ModulesComponent } from './questions/modules/modules.component';
import { RxjsInteractionComponent } from './questions/rxjs-interaction/rxjs-interaction.component';
import { PerformanceComponent } from './questions/performance/performance.component';
import { PipesComponent } from './questions/pipes/pipes.component';
import { RouterComponent } from './questions/router/router.component';
import { ServicesComponent } from './questions/services/services.component';
import { DirectivesComponent } from './questions/directives/directives.component';
import { StylingComponent } from './questions/styling/styling.component';
import { StyleGuideComponent } from './questions/style-guide/style-guide.component';
import { TestingComponent } from './questions/testing/testing.component';
import { TypescriptComponent } from './questions/typescript/typescript.component';
import { JavascriptComponent } from './questions/javascript/javascript.component';
import { CodingComponent } from './questions/coding/coding.component';
import { FunComponent } from './questions/fun/fun.component';
import { LifecycleComponent } from './questions/lifecycle/lifecycle.component';
import { SecurityComponent } from './questions/security/security.component';
import { HomeComponent } from './home/home.component';
import { QuestionDirective } from './shared/directives/question.directive';
import { AnswerDirective } from './shared/directives/answer.directive';
import { QuestionLineItemComponent } from './shared/components/question-line-item/question-line-item.component';
import { AnswerComponent } from 'src/app/shared/components/answer/answer.component';
import { CodeSnippetComponent } from 'src/app/shared/components/code-snippet/code-snippet.component';
import { ExampleComponent } from './shared/components/example/example.component';
import { StubService } from './shared/services/stub.service';
import { QuestionAndAnswerComponent } from './shared/components/question-and-answer/question-and-answer.component';
import { CodeSnippetsComponent } from './shared/components/code-snippets/code-snippets.component';


const ROUTES: Routes = [
  {
    path: '', redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'animations-questions', component: AnimationsComponent },
  { path: 'architecture-questions', component: ArchitectureComponent },
  { path: 'api-questions', component: ApiQuestionsComponent },
  { path: 'template-syntax-questions', component: TemplateSyntaxComponent },
  { path: 'component-questions', component: KomponentComponent },
  { path: 'component-interaction--state-management-questions', component: ComponentInteractionComponent },
  { path: 'forms-questions', component: FormsComponent },
  { path: 'general-questions', component: GeneralQuestionsComponent },
  { path: 'ngmodules-questions', component: ModulesComponent },
  { path: 'observables-rxjs-questions', component: RxjsInteractionComponent },
  { path: 'performance-questions', component: PerformanceComponent },
  { path: 'pipes-questions', component: PipesComponent },
  { path: 'router-questions', component: RouterComponent },
  { path: 'services-questions', component: ServicesComponent },
  { path: 'structural-directives-questions', component: DirectivesComponent },
  { path: 'styling-questions', component: StylingComponent },
  { path: 'style-guide-questions', component: StyleGuideComponent },
  { path: 'testing-questions', component: TestingComponent },
  { path: 'typescript-questions', component: TypescriptComponent },
  { path: 'javascript-questions', component: JavascriptComponent },
  { path: 'coding-questions', component: CodingComponent },
  { path: 'fun-questions', component: FunComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'stub', component: CategoryComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    ArchitectureComponent,
    ApiQuestionsComponent,
    TemplateSyntaxComponent,
    KomponentComponent,
    ComponentInteractionComponent,
    FormsComponent,
    GeneralQuestionsComponent,
    ModulesComponent,
    RxjsInteractionComponent,
    PerformanceComponent,
    PipesComponent,
    RouterComponent,
    ServicesComponent,
    DirectivesComponent,
    StylingComponent,
    StyleGuideComponent,
    TestingComponent,
    TypescriptComponent,
    JavascriptComponent,
    CodingComponent,
    FunComponent,
    LifecycleComponent,
    SecurityComponent,
    HomeComponent,
    QuestionDirective,
    AnswerDirective,
    QuestionLineItemComponent,
    AnswerComponent,
    CodeSnippetComponent,
    ExampleComponent,
    CategoryComponent,
    QuestionAndAnswerComponent,
    CodeSnippetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [StubService, QuestionService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
