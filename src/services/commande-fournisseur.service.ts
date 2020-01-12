import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fournisseur } from 'src/models/Fournisseur';
import { Observable } from 'rxjs';
import { CommandeFournisseur } from 'src/models/CommandeFournisseur';

@Injectable({
  providedIn: 'root'
})
export class CommandeFournisseurService {

  private API_URL = 'http://localhost:8080/stock-mgmt/CommandeFournisseur';
  private options = new HttpHeaders (
    {'Content-Type' : 'application/json'},
    // {'Authorization' : 'Bearer tojkjshdfkjhsdmf'}
    );


  constructor(private http:HttpClient) { }

  public findCommandeFournisseurById(id:number) : Observable<CommandeFournisseur> {
    return this.http.get<CommandeFournisseur>(`${this.API_URL}/getOne/${id}`);
  }

  public findAllCommandeFournisseur(): Observable<Array<CommandeFournisseur>> {
    return this.http.get<Array<CommandeFournisseur>>(this.API_URL + '/getAll');
  }

  public addCommandeFournisseur(commandeFournisseur: CommandeFournisseur) {
    this.http.post(this.API_URL + '/save', commandeFournisseur, {headers: this.options});
  }

  public updateCommandeFournisseur(commandeFournisseur : CommandeFournisseur) {
    this.http.put(this.API_URL + '/update', commandeFournisseur, {headers: this.options});
  } 

  public deleteCommandeFournisseur(commandeFournisseur:CommandeFournisseur) {
    this.http.request('delete', this.API_URL+'/delete', { headers: this.options ,body: commandeFournisseur })
  }
  
}
