import {Component, Input, OnInit} from '@angular/core';
import {Meal} from '../../../shared/meal.model';
import {PanierService} from '../../../shared/panier.service';
import {NgForm} from '@angular/forms';
import {Panier} from '../../../shared/panier.model';

@Component({
  selector: 'app-breakfast-item',
  templateUrl: './breakfast-item.component.html',
  styleUrls: ['./breakfast-item.component.css']
})
export class BreakfastItemComponent implements OnInit {
  @Input() meal: Meal;

  constructor() { }

  ngOnInit() {
  }

  // onAddMeal(form: NgForm) {
  //   const value = form.value;
  //   const newOrder = new Panier(this.meal, value.amount) ;
  //   this.panierService.addMealPanier(newOrder);
  // }


}
