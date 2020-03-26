import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleCrudComponent} from './article-crud/article-crud.component';
import {ArticleTableComponent} from './article-table/article-table.component';


const routes: Routes = [
  {
    path: 'admin',
    component: ArticleTableComponent,
  },
  {
    path: 'admin/article/:crud',
    component: ArticleCrudComponent,
  },
  {
    path: 'admin/article/:crud/:id',
    component: ArticleCrudComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
