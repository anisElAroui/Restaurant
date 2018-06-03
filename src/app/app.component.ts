import { Component } from '@angular/core';
import {MealService} from './shared/meal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MealService]
})
export class AppComponent {
}
