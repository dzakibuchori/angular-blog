import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleComponent} from './article/article.component';
import {Error404Component} from './error404/error404.component';
import {LoginComponent} from './login/login.component';
import {SingleArticleComponent} from './single-article/single-article.component';


const routes: Routes = [
  {
    path: '',
    component: ArticleComponent
  },
  {
    path: 'article/:id',
    component: SingleArticleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
