import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Article} from "../models/Article";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private API_URL = 'http://localhost:8080/stock-mgmt/article';
  private options = new HttpHeaders (
    {'Content-Type' : 'application/json'},
    // {'Authorization' : 'Bearer tojkjshdfkjhsdmf'}
    );


  constructor(private http:HttpClient) { }

  public findAllArticles(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.API_URL + '/getAll');
  }

  public addArticle(article: Article) {
    this.http.post(this.API_URL + '/addArticle', article, {headers: this.options});
  }

  public findArticleById(id:number) : Observable<Article> {
    return this.http.get<Article>(`${this.API_URL}/getOne/${id}`);
  }
}
