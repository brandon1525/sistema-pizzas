import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Orden } from './clases/orden';
import { from, of, merge } from 'rxjs';
import { delay, map, mapTo } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  _ordenesObs: BehaviorSubject<BehaviorSubject<Orden>[]> = new BehaviorSubject([]);

  get observableList(): Observable<BehaviorSubject<Orden>[]> { return this._ordenesObs.asObservable(); }

  add(orden: Orden) {
    const $orden = new BehaviorSubject(orden);
    this.addProcess($orden);
    this._ordenesObs.next(this._ordenesObs.getValue().concat([$orden]));
  }

  addProcess(_orden: BehaviorSubject<Orden>) {
    const interval = setInterval(() => {
      if (_orden.getValue().status === 4) {
        clearInterval(interval);
      } else {
        _orden.getValue().status++;
      }
    }, 3000);
  }

  constructor() { }
}
