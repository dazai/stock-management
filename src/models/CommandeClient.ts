import { Client } from './Client';
import { LigneCommandeClient } from './LigneCommandeClient';

export class CommandeClient {
    IdCommandeClient : number;
    code : string;
    dateCommande : Date;
    client : Client;
    ligneCommandeClients : Array<LigneCommandeClient>;
}