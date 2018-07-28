import { Pizza } from '../pizza';
import { Ingrediente } from '../ingrediente';

export class PizzaChicago extends Pizza {
    public static nombre: String = 'PIZZA CHICAGO';
    public static ingredientes: Ingrediente[] = [Ingrediente.PEPERONNI, Ingrediente.CEBOLLA];

    constructor() {
        super(PizzaChicago.nombre, PizzaChicago.ingredientes);
    }
}
