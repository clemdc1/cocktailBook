import { Component } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CommonModule } from '@angular/common';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';

@Component({
  selector: 'app-cocktail-container',
  standalone: true,
  imports: [CommonModule, CocktailListComponent, CocktailDetailsComponent],
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent {
  public cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://static.750g.com/images/1200-630/b520523117d647dab6b842a36f4cc7f5/mojito-le-vrai.jpg',
      description:
        'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.',
    },
    {
      name: 'Cosmopolitan',
      img: 'https://www.hangoverweekends.co.uk/media/15507/gallery-1430408520-dmg-cosmopolitan-cocktail-001.jpg?width=330px&height=407px',
      description:
        'The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.',
    },
    {
      name: 'Mai Tai',
      img: 'https://www.hangoverweekends.co.uk/media/15506/mm-cocktail-guide-maitai-590x375.jpg?width=434px&height=276px',
      description:
        'The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.',
    },
  ];
  public selectedCocktail: Cocktail = this.cocktails[0];
}
