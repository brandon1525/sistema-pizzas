import { Pizza } from '../pizza';
import { Ingrediente } from '../ingrediente';

export class PizzaMexicana extends Pizza {
    public static nombre: String = 'PIZZA MEXICANA';
    public static ingredientes: Ingrediente[] = [Ingrediente.PEPERONNI, Ingrediente.CEBOLLA, Ingrediente.JALAPENO];

    constructor() {
        super(PizzaMexicana.nombre, PizzaMexicana.ingredientes);
    }

}
