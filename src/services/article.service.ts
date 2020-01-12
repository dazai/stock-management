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

  public findArticleById(id:number) : Observable<Article> {
    return this.http.get<Article>(`${this.API_URL}/getOne/${id}`);
  }

  public findAllArticle(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.API_URL + '/getAll');
  }

  public addArticle(article: Article) {
    this.http.post(this.API_URL + '/save', article, {headers: this.options});
  }

  public updateArticle(article : Article) {
    this.http.put(this.API_URL + '/update', article, {headers: this.options});
  } 

  public deleteArticle(article:Article) {
    this.http.request('delete', this.API_URL+'/delete', { headers: this.options ,body: article })
  }
}

