import { CommandeFournisseur } from './CommandeFournisseur';

export class Fournisseur{
    idFournisseur : number;
    nom : string;
    prenom : string;
    adresse :string;
    photo : string;
    mail : string;
    commandeFournisseurs : Array<CommandeFournisseur>;
}