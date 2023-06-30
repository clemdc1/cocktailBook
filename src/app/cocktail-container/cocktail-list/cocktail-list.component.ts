import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from '../../models/cocktail.model';
import { CommonModule } from '@angular/common';
import { SelectedDirective } from 'src/app/directives/selected.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
  imports: [CommonModule, SelectedDirective, RouterLinkActive, RouterLink],
})
export class CocktailListComponent {
  @Input({ required: true }) cocktails?: Cocktail[];
  constructor() {}
}
