import { Component, Input } from '@angular/core';
import { Cocktail } from '../../models/cocktail.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
  imports: [CommonModule],
})
export class CocktailListComponent {
  @Input({ required: true }) cocktails!: Cocktail[];
  constructor() {}
}
