import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ArticleCrudComponent } from './article-crud/article-crud.component';
import { ArticleTableComponent } from './article-table/article-table.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ArticleCrudComponent, ArticleTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
