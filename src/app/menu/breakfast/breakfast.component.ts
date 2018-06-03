import { Component, OnInit } from '@angular/core';
import {MealService} from '../../shared/meal.service';
import {Meal} from '../../shared/meal.model';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  meals: Meal[];
  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.meals = this.mealService.getMeals();
  }
}
