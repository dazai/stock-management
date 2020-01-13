import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ArticleService} from "../services/article.service";
import { ArticlesComponent } from './articles/articles.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CategoryComponent,
    ClientComponent,
    CommandeClientComponent,
    CommandeFournisseurComponent,
    FournisseurComponent,
    LigneCommandeClientComponent,
    LigneCommandeFournisseurComponent,
    LigneVenteComponent,
    MvtStockComponent,
    VenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [ArticleService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
