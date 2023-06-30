import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-ingredient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss'],
})
export class IngredientComponent {
  @Input() public ingredients: Ingredient[] | null = null;
}
