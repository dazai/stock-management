import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/models/Fournisseur';
import { FournisseurService } from 'src/services/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  private allFournisseur: Array<Fournisseur>;
  private fournisseur: Fournisseur;

  constructor(private fournisseurService: FournisseurService) {
  }

  ngOnInit() {
  }

  findAllFournisseur(): void {
    this.fournisseurService.findAllFournisseur().pipe().subscribe(data => this.allFournisseur = data);
  }

  findFournisseurById(id: number) {
    this.fournisseurService.findFournisseurById(id).pipe().subscribe(data => this.fournisseur = data);
  }

}