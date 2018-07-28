import { Pizza } from '../pizza';
import { Ingrediente } from '../ingrediente';

export class PizzaClasica extends Pizza {
    public static nombre: String = 'PIZZA CLASICA';
    public static ingredientes: Ingrediente[] = [Ingrediente.PEPERONNI];

    constructor() {
        super(PizzaClasica.nombre, PizzaClasica.ingredientes);
    }

}
