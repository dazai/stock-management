import { Component, OnInit } from '@angular/core';
import { CommandeClient } from 'src/models/CommandeClient';
import { CommandeClientService } from 'src/services/commande-client.service';

@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.css']
})
export class CommandeClientComponent implements OnInit {

  private allCommandeClient: Array<CommandeClient>;
  private commandeClient: CommandeClient;

  constructor(private commandeClientService: CommandeClientService) {
  }

  ngOnInit() {
  }

  findAllCommandeClient(): void {
    this.commandeClientService.getAll().pipe().subscribe(data => this.allCommandeClient = data);
  }

  findCommandeClientById(id: number) {
    this.commandeClientService.getOne(id).pipe().subscribe(data => this.commandeClient = data);
  }

  addCommandeClient(commandeClient:CommandeClient){
    this.commandeClientService.addCommandeClient(commandeClient);
  }

  //updateCommandeClient(commandeClient:CommandeClient){
    //this.commandeClientService.updateCommandeClient(commandeClient);
  //}

  //deleteCommandeClient(commandeClient:CommandeClient){
    //this.commandeClientService.deleteCommandeClient(commandeClient);
  //}

}