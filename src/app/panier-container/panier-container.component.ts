import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IngredientComponent } from './ingredient/ingredient.component';
import { Ingredient } from '../models/ingredient.model';
import { Subscription } from 'rxjs';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier-container',
  standalone: true,
  imports: [CommonModule, IngredientComponent],
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss'],
})
export class PanierContainerComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] | null = null;
  public subscription: Subscription = new Subscription();
  constructor(private panierService: PanierService) {}
  ngOnInit() {
    this.subscription.add(
      this.panierService.ingredients$.subscribe(
        (ingredients: Ingredient[] | null) => (this.ingredients = ingredients)
      )
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
