import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from 'src/models/Article';
import { Fournisseur } from 'src/models/Fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private API_URL = 'http://localhost:8080/stock-mgmt/fournisseur';
  private options = new HttpHeaders (
    {'Content-Type' : 'application/json'},
    // {'Authorization' : 'Bearer tojkjshdfkjhsdmf'}
    );


  constructor(private http:HttpClient) { }

  public findFournisseurById(id:number) : Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${this.API_URL}/getOne/${id}`);
  }

  public findAllFournisseur(): Observable<Array<Fournisseur>> {
    return this.http.get<Array<Fournisseur>>(this.API_URL + '/getAll');
  }

  public addFournisseur(fournisseur: Fournisseur) {
    this.http.post(this.API_URL + '/save', fournisseur, {headers: this.options});
  }

  public updateFournisseur(fournisseur : Fournisseur) {
    this.http.put(this.API_URL + '/update', fournisseur, {headers: this.options});
  } 

  public deleteFournisseur(fournisseur:Fournisseur) {
    this.http.request('delete', this.API_URL+'/delete', { headers: this.options ,body: fournisseur })
  }


  
}
