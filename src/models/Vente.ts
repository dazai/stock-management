import { LigneVente } from './LigneVente';

export class Vente{
    idVente : number;
    code : string;
    dateVente : Date;
    ligneVentes : Array<LigneVente>;
}