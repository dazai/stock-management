import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MvtStock } from 'src/models/MvtStock';

@Injectable({
  providedIn: 'root'
})
export class MvtStockService {

  private API_URL = 'http://localhost:8080/stock-mgmt/mvtStock';
  private options = new HttpHeaders (
    {'Content-Type' : 'application/json'},
    // {'Authorization' : 'Bearer tojkjshdfkjhsdmf'}
    );


  constructor(private http:HttpClient) { }

  public findMvtStockById(id:number) : Observable<MvtStock> {
    return this.http.get<MvtStock>(`${this.API_URL}/getOne/${id}`);
  }

  public findAllMvtStock(): Observable<Array<MvtStock>> {
    return this.http.get<Array<MvtStock>>(this.API_URL + '/getAll');
  }

  public addMvtStock(mvtStock: MvtStock) {
    this.http.post(this.API_URL + '/save', mvtStock, {headers: this.options});
  }

  public updateMvtStock(mvtStock : MvtStock) {
    this.http.put(this.API_URL + '/update', mvtStock, {headers: this.options});
  } 

  public deleteMvtStock(mvtStock:MvtStock) {
    this.http.request('delete', this.API_URL+'/delete', { headers: this.options ,body: mvtStock })
  }
}
