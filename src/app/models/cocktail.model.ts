import { Ingredient } from './ingredient.model';

export interface Cocktail {
  name: string;
  img: string;
  description: string;
  ingredients: Ingredient[];
}
