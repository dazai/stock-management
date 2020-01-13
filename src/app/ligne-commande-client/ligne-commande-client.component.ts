import { Component, OnInit } from '@angular/core';
import { LigneCommandeClient } from 'src/models/LigneCommandeClient';
import { LigneCommandeClientService } from 'src/services/ligne-commande-client.service';

@Component({
  selector: 'app-ligne-commande-client',
  templateUrl: './ligne-commande-client.component.html',
  styleUrls: ['./ligne-commande-client.component.css']
})
export class LigneCommandeClientComponent implements OnInit {

  private allLigneCommandeClient : Array<LigneCommandeClient>;
  private ligneCommandeClient : LigneCommandeClient;

  constructor(private ligneCommandeClientService : LigneCommandeClientService) { }

  ngOnInit() {
  }

  findAll() : void {
    this.ligneCommandeClientService.findAllLigneCommandeClient().pipe()
    .subscribe(data => this.allLigneCommandeClient = data);
  }

  findOne(id : number) : void {
    this.ligneCommandeClientService.findLigneCommandeClientById(id).pipe()
    .subscribe(data => this.ligneCommandeClient = data);
  }

}