import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(cocktails: Cocktail[] | null, search: string): Cocktail[] | null {
    return cocktails
      ? cocktails.filter((cocktail) =>
          cocktail.name.toLowerCase().includes(search.toLowerCase())
        )
      : null;
  }
}
