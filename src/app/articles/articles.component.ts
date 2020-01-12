import {Component, OnInit} from '@angular/core';
import {Article} from "../../models/Article";
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private allArticles: Array<Article>;
  private article: Article;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
  }

  findAllArticles(): void {
    this.articleService.findAllArticles().pipe().subscribe(data => this.allArticles = data);
  }

  findById(id: number) {
    this.articleService.findArticleById(id).pipe().subscribe(data => this.article = data);
  }

}
