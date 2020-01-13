import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { CommandeClientComponent } from './commande-client/commande-client.component';
import { CommandeFournisseurComponent } from './commande-fournisseur/commande-fournisseur.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { LigneCommandeClientComponent } from './ligne-commande-client/ligne-commande-client.component';
import { LigneCommandeFournisseurComponent } from './ligne-commande-fournisseur/ligne-commande-fournisseur.component';
import { LigneVenteComponent } from './ligne-vente/ligne-vente.component';
import { MvtStockComponent } from './mvt-stock/mvt-stock.component';
import { VenteComponent } from './vente/vente.component';


const routes: Routes = [
  {path: 'articles', component: ArticlesComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'client', component: ClientComponent},
  {path: 'cmdClient', component: CommandeClientComponent},
  {path: 'cmdFournisseur', component: CommandeFournisseurComponent},
  {path: 'fournisseur', component: FournisseurComponent},
  {path: 'ligneCmdClient', component: LigneCommandeClientComponent},
  {path: 'ligneCmdFournisseur', component: LigneCommandeFournisseurComponent},
  {path: 'ligneVente', component: LigneVenteComponent},
  {path: 'mvtStock', component: MvtStockComponent},
  {path: 'vente', component: VenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
