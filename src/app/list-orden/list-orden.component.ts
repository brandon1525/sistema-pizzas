import { Component, OnInit, Input } from '@angular/core';
import { OrdenService } from '../orden.service';
import { Status } from '../clases/status';
import { Ingrediente } from '../clases/ingrediente';

@Component({
  selector: 'app-list-orden',
  templateUrl: './list-orden.component.html',
  styleUrls: ['./list-orden.component.css']
})
export class ListOrdenComponent implements OnInit {
  Status = Status;

  constructor(public ordenS: OrdenService) { }

  ngOnInit() {
  }

  parseIngredientes(ingredientes: any[]): String[] {
    return ingredientes.sort().map(x => Ingrediente[x]);
  }

}
