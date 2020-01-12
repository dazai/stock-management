import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from 'src/models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private API_URL = 'http://localhost:8080/stock-mgmt/clientCtrl';
  private options = new HttpHeaders (
    {'Content-Type' : 'application/json'},
    // {'Authorization' : 'Bearer tojkjshdfkjhsdmf'}
    );

  constructor(private http:HttpClient) { }

  public addClient(client : Client) {
    this.http.post(this.API_URL + '/save', client, {headers: this.options});
  }

  public updateClient(client : Client) {
    this.http.put(this.API_URL + '/update', client, {headers: this.options});
  }

  //public deleteClient(client : Client) {
    //this.http.delete(this.API_URL + '/save', client);
  //}

  public getAllClients(): Observable<Array<Client>> {
    return this.http.get<Array<Client>>(this.API_URL + '/getAll');
  }

  public getClientById(id:number) : Observable<Client> {
    return this.http.get<Client>(`${this.API_URL}/getOne/${id}`);
  }

  public getClientByMail(mail : string) {
    this.http.get(`${this.API_URL}/getClientByMail/${mail}`, {headers: this.options});
  }

  public getClientByCriteria(criteria : string) {
    this.http.get(`${this.API_URL}/getClientByFilterCriteria/namePattern'/${criteria}`, {headers: this.options});
  }

}
