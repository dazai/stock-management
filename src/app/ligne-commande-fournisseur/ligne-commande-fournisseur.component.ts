import { Component, OnInit } from '@angular/core';
import { LigneCommandeFournisseur } from 'src/models/LigneCommandeFournisseur';
import { LigneCommandeFournisseurService } from 'src/services/ligne-commande-fournisseur.service';

@Component({
  selector: 'app-ligne-commande-fournisseur',
  templateUrl: './ligne-commande-fournisseur.component.html',
  styleUrls: ['./ligne-commande-fournisseur.component.css']
})
export class LigneCommandeFournisseurComponent implements OnInit {

  private allLigne : Array<LigneCommandeFournisseur>;
  private ligneFournisseur : LigneCommandeFournisseur;

  constructor(private ligneCmdFournisseur : LigneCommandeFournisseurService) { }

  ngOnInit() {
  }

  findAll() : void {
    this.ligneCmdFournisseur.findAllLigneCommandeFournisseur().pipe()
    .subscribe(data => this.allLigne = data);
  }

  findOne(id : number) : void{
    this.ligneCmdFournisseur.findLigneCommandeFournisseurById(id).pipe()
    .subscribe(data => this.ligneFournisseur = data);
  }

}