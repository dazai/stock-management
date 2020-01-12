import { CommandeFournisseur } from './CommandeFournisseur';
import { Article } from './Article';

export class LigneCommandeFournisseur{
    idLigneCommandeFournisseur : number;
    article : Article;
    commandeFournisseur : CommandeFournisseur;
}