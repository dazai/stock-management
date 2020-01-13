import { Component, OnInit } from '@angular/core';
import { Vente } from 'src/models/Vente';
import { VenteService } from 'src/services/vente.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {

  private allVente : Array<Vente>;
  private vente : Vente;

  constructor(private venteService : VenteService) { }

  ngOnInit() {
  }

  findAll() : void {
    this.venteService.findAllVente().pipe().subscribe(data => this.allVente = data);
  }

  findOne(id : number) : void {
    this.venteService.findVenteById(id).pipe().subscribe(data => this.vente = data);
  }

}