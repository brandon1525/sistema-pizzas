import { Component, OnInit } from '@angular/core';
import { Orden } from '../clases/orden';
import { PizzaChicago } from '../clases/pizzas/pizza-chicago';
import { PizzaMexicana } from '../clases/pizzas/pizza-mexicana';
import { PizzaHawaii } from '../clases/pizzas/pizza-hawaii';
import { PizzaClasica } from '../clases/pizzas/pizza-clasica';
import { Status } from '../clases/status';
import { OrdenService } from '../orden.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})

export class OrdenComponent implements OnInit {

  TIPOS_PIZZA = [
    new PizzaChicago().name, new PizzaMexicana().name, new PizzaHawaii().name, new PizzaClasica().name
  ];
  folio: number;
  orden: any = {
    folio: 0,
    t_pizza: 'PIZZA CLASICA',
    nombreCliente: ''
  };

  constructor(private ordenS: OrdenService) {
  }

  ngOnInit() {
    this.folio = 0;
  }

  pedirOrden() {
    const pedido: Orden = new Orden(this.orden.folio, this.orden.nombreCliente);
    switch (this.orden.t_pizza) {
      case 'PIZZA CHICAGO':
        pedido.pizza = new PizzaChicago();
        break;
      case 'PIZZA MEXICANA':
        pedido.pizza = new PizzaMexicana();
        break;
      case 'PIZZA HAWAII':
        pedido.pizza = new PizzaHawaii();
        break;
      case 'PIZZA CLASICA':
        pedido.pizza = new PizzaClasica();
        break;
    }
    pedido.status = Status['EN PEDIDO'];
    this.ordenS.add(pedido);
    this.folio++;
    this.initOrden();
  }

  initOrden() {
    this.orden.t_pizza = 'PIZZA CLASICA';
    this.orden.nombreCliente = '';
    this.orden.folio = this.folio;
  }

}
