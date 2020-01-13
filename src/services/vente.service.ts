import { Injectable } from '@angular/core';
import { Vente } from 'src/models/Vente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private API_URL = 'http://localhost:8080/stock-mgmt/vente';
  private options = new HttpHeaders (
    {'Content-Type' : 'application/json'},
    // {'Authorization' : 'Bearer tojkjshdfkjhsdmf'}
    );


  constructor(private http:HttpClient) { }

  public findVenteById(id:number) : Observable<Vente> {
    return this.http.get<Vente>(`${this.API_URL}/getOne/${id}`);
  }

  public findAllVente(): Observable<Array<Vente>> {
    return this.http.get<Array<Vente>>(this.API_URL + '/getAll');
  }

  public addVente(vente: Vente) {
    this.http.post(this.API_URL + '/save', vente, {headers: this.options});
  }

  public updateVente(vente : Vente) {
    this.http.put(this.API_URL + '/update', vente, {headers: this.options});
  } 

  public deleteVente(vente:Vente) {
    this.http.request('delete', this.API_URL+'/delete', { headers: this.options ,body: vente })
  }
}