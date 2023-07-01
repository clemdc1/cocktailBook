import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Cocktail } from '../../models/cocktail.model';
import { PanierService } from 'src/app/services/panier.service';
import { CocktailService } from 'src/app/services/cocktail.service';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit, OnDestroy {
  public cocktail!: Cocktail;
  private sub: Subscription = new Subscription();
  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (this.sub) {
        this.sub.unsubscribe();
      }
      this.sub = this.cocktailService
        .getCocktail(+paramMap.get('index')!)
        .subscribe((cocktail: Cocktail) => {
          this.cocktail = cocktail;
        });
    });
  }
  public addToPanier() {
    this.panierService.addPanier(this.cocktail!.ingredients);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
}
