import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() private changeCocktail: EventEmitter<number> =
    new EventEmitter<number>();
  constructor() {}

  selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
