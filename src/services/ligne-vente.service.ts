import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LigneVente } from 'src/models/LigneVente';

@Injectable({
  providedIn: 'root'
})
export class LigneVenteService {

  private API_URL = 'http://localhost:8080/stock-mgmt/LigneVente';
  private options = new HttpHeaders (
    {'Content-Type' : 'application/json'},
    // {'Authorization' : 'Bearer tojkjshdfkjhsdmf'}
    );


  constructor(private http:HttpClient) { }

  public findLigneVenteById(id:number) : Observable<LigneVente> {
    return this.http.get<LigneVente>(`${this.API_URL}/getOne/${id}`);
  }

  public findAllLigneVente(): Observable<Array<LigneVente>> {
    return this.http.get<Array<LigneVente>>(this.API_URL + '/getAll');
  }

  public addLigneVente(ligneVente: LigneVente) {
    this.http.post(this.API_URL + '/save', ligneVente, {headers: this.options});
  }

  public updateLigneVente(ligneVente : LigneVente) {
    this.http.put(this.API_URL + '/update', ligneVente, {headers: this.options});
  } 

  public deleteLigneVente(ligneVente:LigneVente) {
    this.http.request('delete', this.API_URL+'/delete', { headers: this.options ,body: ligneVente })
  }
}

