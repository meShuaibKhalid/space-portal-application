import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleRoutingModule } from './article-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from '../shared/components/nav/nav.component';

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    NavComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
