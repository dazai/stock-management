import { Component, OnInit } from '@angular/core';
import { Client } from 'src/models/Client';
import { ClientService } from 'src/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  private allClients: Array<Client>;
  private client: Client;

  constructor(private clientService: ClientService) {  }

  ngOnInit() {
  }

  findClients() : void {
    this.clientService.getAllClients().pipe().subscribe(data => this.allClients = data);
  }

  findClientById(id : number) : void {
    this.clientService.getClientById(id).pipe().subscribe(data => this.client = data);
  }

  findClientByMail(mail : string) : void {
    this.clientService.getClientByMail(mail).pipe().subscribe(data => this.client = data);
  }

  findClientByCriteria(criteria : string) : void {
    this.clientService.getClientByCriteria(criteria).pipe().subscribe(data => this.client = data);
  }

}