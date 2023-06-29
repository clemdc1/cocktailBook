import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from '../../models/cocktail.model';
import { CommonModule } from '@angular/common';
import { SelectedDirective } from 'src/app/directives/selected.directive';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
  imports: [CommonModule, SelectedDirective],
})
export class CocktailListComponent {
  @Input({ required: true }) cocktails!: Cocktail[];
  @Input({ required: true }) selectedCocktail!: Cocktail;
  @Output() private changeCocktail: EventEmitter<number> =
    new EventEmitter<number>();
  constructor() {}

  selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
