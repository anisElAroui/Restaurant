import { Component, OnInit } from '@angular/core';
import {Meal} from '../shared/meal.model';
import {MealService} from '../shared/meal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  meals: Meal[];
  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.meals = this.mealService.getMeals();
  }

}
