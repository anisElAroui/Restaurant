import {Meal} from './meal.model';

export class Panier {
  constructor(public meal: Meal, public amount: number){}
}
