import { Component, OnInit } from '@angular/core';
import { MvtStock } from 'src/models/MvtStock';
import { MvtStockService } from 'src/services/mvt-stock.service';

@Component({
  selector: 'app-mvt-stock',
  templateUrl: './mvt-stock.component.html',
  styleUrls: ['./mvt-stock.component.css']
})
export class MvtStockComponent implements OnInit {

  private allMvtStk : Array<MvtStock>;
  private mvtStk : MvtStock;

  constructor(private mvtStkService : MvtStockService) { }

  ngOnInit() {
  }

  findAll() : void {
    this.mvtStkService.findAllMvtStock().pipe().subscribe(data => this.allMvtStk = data);
  }

  findOne(id : number) : void {
    this.mvtStkService.findMvtStockById(id).pipe().subscribe(data => this.mvtStk = data);
  }

}