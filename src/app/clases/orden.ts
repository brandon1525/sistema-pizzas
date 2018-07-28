import { Pizza } from './pizza';
import { Status } from './status';

export class Orden {
    folio: Number;
    nombreCliente: String;
    pizza: Pizza;
    status: Status;

    constructor(folio, nombreCliente?, pizza?, status?) {
        this.folio = folio;
        this.nombreCliente = nombreCliente;
        this.pizza = pizza;
        this.status = status;
    }
}
