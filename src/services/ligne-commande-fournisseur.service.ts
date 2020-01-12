import { Injectable } from '@angular/core';
import { LigneCommandeFournisseur } from 'src/models/LigneCommandeFournisseur';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeFournisseurService {

  private API_URL = 'http://localhost:8080/stock-mgmt/LigneCommandeFournisseur';
  private options = new HttpHeaders (
    {'Content-Type' : 'application/json'},
    // {'Authorization' : 'Bearer tojkjshdfkjhsdmf'}
    );


  constructor(private http:HttpClient) { }

  public findLigneCommandeFournisseurById(id:number) : Observable<LigneCommandeFournisseur> {
    return this.http.get<LigneCommandeFournisseur>(`${this.API_URL}/getOne/${id}`);
  }

  public findAllLigneCommandeFournisseur(): Observable<Array<LigneCommandeFournisseur>> {
    return this.http.get<Array<LigneCommandeFournisseur>>(this.API_URL + '/getAll');
  }

  public addLigneCommandeFournisseur(ligneCommandeFournisseur: LigneCommandeFournisseur) {
    this.http.post(this.API_URL + '/save', ligneCommandeFournisseur, {headers: this.options});
  }

  public updateLigneCommandeFournisseur(ligneCommandeFournisseur : LigneCommandeFournisseur) {
    this.http.put(this.API_URL + '/update', ligneCommandeFournisseur, {headers: this.options});
  } 

  public deleteLigneCommandeFournisseur(ligneCommandeFournisseur:LigneCommandeFournisseur) {
    this.http.request('delete', this.API_URL+'/delete', { headers: this.options ,body: ligneCommandeFournisseur })
  }
}
