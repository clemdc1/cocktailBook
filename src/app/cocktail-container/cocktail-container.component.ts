import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CommonModule } from '@angular/common';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailService } from '../services/cocktail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-container',
  standalone: true,
  imports: [CommonModule, CocktailListComponent, CocktailDetailsComponent],
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  public selectedCocktail!: Cocktail;
  public cocktails!: Cocktail[];
  public subscription: Subscription = new Subscription();
  constructor(private cocktailService: CocktailService) {}
  ngOnInit() {
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      })
    );
    this.subscription.add(
      this.cocktailService.selectedCocktail$.subscribe(
        (selectedCocktail: Cocktail) => {
          this.selectedCocktail = selectedCocktail;
        }
      )
    );
  }
  public selectCocktail(index: number) {
    this.cocktailService.selectCocktail(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
