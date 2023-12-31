import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../models/cocktail.model';
import { PanierService } from 'src/app/services/panier.service';
import { CocktailService } from 'src/app/services/cocktail.service';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail: Cocktail;
  constructor(
    private cocktailService: CocktailService,
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cocktail = this.cocktailService.getCocktail(
      +this.activatedRoute.snapshot.paramMap.get('index')!
    );
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index');
      if (cocktailIndex) {
        this.cocktail = this.cocktailService.getCocktail(+cocktailIndex);
      }
    });
  }
  public addToPanier() {
    this.panierService.addPanier(this.cocktail.ingredients);
  }
}
