import { Injectable } from '@angular/core';
import { HttpHeaders , HttpClient} from '@angular/common/http';
import { Category } from 'src/models/Category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_URL = 'http://localhost:8080/stock-mgmt/Category';
  private options = new HttpHeaders (
    {'Content-Type' : 'application/json'},
    // {'Authorization' : 'Bearer tojkjshdfkjhsdmf'}
    );

  constructor(private http : HttpClient) { }

  public addCategory(category : Category) {
    this.http.post(this.API_URL + '/save', category, {headers: this.options});
  }

  public updateClient(category : Category) {
    this.http.put(this.API_URL + '/update', category, {headers: this.options});
  }

  //public deleteClient(client : Client) {
    //this.http.delete(this.API_URL + '/save', client);
  //}

  public getAll(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(this.API_URL + '/getAll');
  }

  public getOne(id:number) : Observable<Category> {
    return this.http.get<Category>(`${this.API_URL}/getOne/${id}`);
  }

}
