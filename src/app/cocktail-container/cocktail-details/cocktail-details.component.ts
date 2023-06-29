import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Cocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent {
  @Input({ required: true }) cocktail!: Cocktail;
  constructor() {}
}
