import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IngredientComponent } from './ingredient/ingredient.component';

@Component({
  selector: 'app-panier-container',
  standalone: true,
  imports: [CommonModule, IngredientComponent],
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss'],
})
export class PanierContainerComponent {}
