import { Pizza } from '../pizza';
import { Ingrediente } from '../ingrediente';

export class PizzaHawaii extends Pizza {
    public static nombre: String = 'PIZZA HAWAII';
    public static ingredientes: Ingrediente[] = [Ingrediente.PIÑA, Ingrediente.JAMON];

    constructor() {
        super(PizzaHawaii.nombre, PizzaHawaii.ingredientes);
    }

}
