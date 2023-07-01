import { Ingredient } from './ingredient.model';

export interface Cocktail {
  name: string;
  _id?: string;
  img: string;
  description: string;
  ingredients: Ingredient[];
}
