import { Component, OnInit } from '@angular/core';
import { LigneVente } from 'src/models/LigneVente';
import { LigneVenteService } from 'src/services/ligne-vente.service';

@Component({
  selector: 'app-ligne-vente',
  templateUrl: './ligne-vente.component.html',
  styleUrls: ['./ligne-vente.component.css']
})
export class LigneVenteComponent implements OnInit {

  private allLigneVente : Array<LigneVente>;
  private ligneVente : LigneVente;

  constructor(private ligneVenteService : LigneVenteService) { }

  ngOnInit() {
  }

  findAll() : void {
    this.ligneVenteService.findAllLigneVente().pipe().subscribe(data => this.allLigneVente = data);
  }

  findOne(id : number) : void {
    this.ligneVenteService.findLigneVenteById(id).pipe().subscribe(data => this.ligneVente = data);
  }

}