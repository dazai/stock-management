import { Fournisseur } from './Fournisseur';
import { LigneCommandeFournisseur } from './LigneCommandeFournisseur';

export class CommandeFournisseur{
    idCommandeFournisseur : number;
    code : string;
    dateCommande : Date;
    fournisseur : Fournisseur;
    ligneCommandeFournisseurs : Array<LigneCommandeFournisseur>;
}