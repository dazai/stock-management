import { Component, OnInit } from '@angular/core';
import { CommandeFournisseur } from 'src/models/CommandeFournisseur';
import { CommandeFournisseurService } from 'src/services/commande-fournisseur.service';

@Component({
  selector: 'app-commande-fournisseur',
  templateUrl: './commande-fournisseur.component.html',
  styleUrls: ['./commande-fournisseur.component.css']
})
export class CommandeFournisseurComponent implements OnInit {

  private allCommandeFournisseur: Array<CommandeFournisseur>;
  private commandeFournisseur: CommandeFournisseur;

  constructor(private commandeFournisseurService: CommandeFournisseurService) {
  }

  ngOnInit() {
  }

  findAllCommandeFournisseur(): void {
    this.commandeFournisseurService.findAllCommandeFournisseur().pipe().subscribe(data => this.allCommandeFournisseur = data);
  }

  findCommandeFournisseurById(id: number) {
    this.commandeFournisseurService.findCommandeFournisseurById(id).pipe().subscribe(data => this.commandeFournisseur= data);
  }

  addCommandeFournisseur(commandeFournisseur:CommandeFournisseur){
    this.commandeFournisseurService.addCommandeFournisseur(commandeFournisseur);
  }

  updateCommandeFournisseur(commandeFournisseur:CommandeFournisseur){
    this.commandeFournisseurService.updateCommandeFournisseur(commandeFournisseur);
  }

  deleteCommandeFournisseur(commandeFournisseur:CommandeFournisseur){
    this.commandeFournisseurService.deleteCommandeFournisseur(commandeFournisseur);
  }


}