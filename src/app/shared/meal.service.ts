import {Meal} from './meal.model';

export class MealService {

  constructor() {}

  private meals: Meal[] = [
    new Meal('A pasta Meal',
      'This is simply a test',
      './assets/images/offer_1.jpg',
      45),
    new Meal('A couscous Meal',
      'This is a test',
      './assets/images/offer_2.jpg',
      23),
    new Meal('A steak Meal',
      'This is also a test',
      './assets/images/offer_3.jpg',
      50),
    new Meal('A pasta Meal',
      'This is simply a test',
      './assets/images/offer_1.jpg',
      45),
    new Meal('A couscous Meal',
      'This is a test',
      './assets/images/offer_2.jpg',
      23),
    new Meal('A steak Meal',
      'This is also a test',
      './assets/images/offer_3.jpg',
      50),  ];

  getMeals() {
    // slice will allow us to have a copy of the array otherwise it will be overided
    return this.meals.slice();
  }

  addMealPanier(meal: Meal) {
  }

}
