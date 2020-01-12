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

  constructor(private http : HttpClient) { }

  public addCommandeClient(commande : CommandeClient) {
    this.http.post(this.API_URL + '/save', commande, {headers: this.options});
  }

  public updateCommande(commande : CommandeClient) {
    this.http.put(this.API_URL + '/update', commande, {headers: this.options});
  }

  //public deleteClient(client : Client) {
    //this.http.delete(this.API_URL + '/save', client);
  //}

  public getAll(): Observable<Array<CommandeClient>> {
    return this.http.get<Array<CommandeClient>>(this.API_URL + '/getAll');
  }

  public getOne(id:number) : Observable<CommandeClient> {
    return this.http.get<CommandeClient>(`${this.API_URL}/getOne/${id}`);
  }

}
