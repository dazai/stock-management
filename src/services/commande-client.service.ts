import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CommandeClient } from 'src/models/CommandeClient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeClientService {

  private API_URL = 'http://localhost:8080/stock-mgmt/CommandeClientCtrl';
  private options = new HttpHeaders (
    {'Content-Type' : 'application/json'},
    // {'Authorization' : 'Bearer tojkjshdfkjhsdmf'}
    );


  constructor(private http:HttpClient) { }

  public findCommandeClientById(id:number) : Observable<CommandeClient> {
    return this.http.get<CommandeClient>(`${this.API_URL}/getOne/${id}`);
  }

  public findAllCommandeClient(): Observable<Array<CommandeClient>> {
    return this.http.get<Array<CommandeClient>>(this.API_URL + '/getAll');
  }

  public addCommandeClient(commandeClient: CommandeClient) {
    this.http.post(this.API_URL + '/save', commandeClient, {headers: this.options});
  }

  public updateCommandeClient(commandeClient : CommandeClient) {
    this.http.put(this.API_URL + '/update', commandeClient, {headers: this.options});
  } 

  public deleteCommandeClient(commandeClient:CommandeClient) {
    this.http.request('delete', this.API_URL+'/delete', { headers: this.options ,body: commandeClient })
  }

}
