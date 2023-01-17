import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleI } from 'src/app/shared/interfaces';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articleList$: Observable<ArticleI[]> = new Observable();
  constructor(private dataSerivce: DataService) {}

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles() {
    this.articleList$ = this.dataSerivce.getArticles();
  }

  public getMinutesToRead(article: string) {
    return Math.ceil(article.length / 1000);
  }
}
