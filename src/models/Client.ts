import { CommandeClient } from './CommandeClient';

export class Client{
    idClient : number;
    nom : string;
    prenom : string;
    adresse : string;
    photo : string;
    mail : string;
    commandeClients : Array<CommandeClient>;

}