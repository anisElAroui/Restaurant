import {Panier} from './panier.model';
import {EventEmitter} from '@angular/core';

export class PanierService {

  // ingredientsChanged = new EventEmitter<Panier[]>();

  private panier: Panier[] = [];

  addMealPanier(order: Panier) {
    this.panier.push(order);
    // this.ingredientsChanged.emit(this.panier.slice());
  }

}
