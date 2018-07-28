import { Ingrediente } from './ingrediente';

export class Pizza {
    name: String;
    ingredientes: Ingrediente[] = [Ingrediente.SALSA, Ingrediente.QUESO];

    constructor(name: String, ingredientes: Ingrediente[]) {
        this.name = name;
        this.ingredientes = this.ingredientes.concat(ingredientes);
    }
}
