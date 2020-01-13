import { Injectable } from '@angular/core';
import { LigneCommandeClient } from 'src/models/LigneCommandeClient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeClientService {

  private API_URL = 'http://localhost:8080/stock-mgmt/LigneCommandeClient';
  private options = new HttpHeaders (
    {'Content-Type' : 'application/json'},
    // {'Authorization' : 'Bearer tojkjshdfkjhsdmf'}
    );


  constructor(private http:HttpClient) { }

  public findLigneCommandeClientById(id:number) : Observable<LigneCommandeClient> {
    return this.http.get<LigneCommandeClient>(`${this.API_URL}/getOne/${id}`);
  }

  public findAllLigneCommandeClient(): Observable<Array<LigneCommandeClient>> {
    return this.http.get<Array<LigneCommandeClient>>(this.API_URL + '/getAll');
  }

  public addLigneCommandeClient(ligneCommandeClient: LigneCommandeClient) {
    this.http.post(this.API_URL + '/save', ligneCommandeClient, {headers: this.options});
  }

  public updateLigneCommandeClient(ligneCommandeClient : LigneCommandeClient) {
    this.http.put(this.API_URL + '/update', ligneCommandeClient, {headers: this.options});
  } 

  public deleteLigneCommandeClient(ligneCommandeClient:LigneCommandeClient) {
    this.http.request('delete', this.API_URL+'/delete', {headers: this.options, body: ligneCommandeClient })
  }
}