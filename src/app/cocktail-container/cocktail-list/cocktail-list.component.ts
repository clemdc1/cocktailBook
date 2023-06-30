import { Component, Input } from '@angular/core';
import { Cocktail } from '../../models/cocktail.model';
import { CommonModule } from '@angular/common';
import { SelectedDirective } from 'src/app/directives/selected.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FilterPipe } from 'src/app/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
  imports: [
    CommonModule,
    SelectedDirective,
    RouterLinkActive,
    RouterLink,
    FilterPipe,
    FormsModule,
  ],
})
export class CocktailListComponent {
  public search = '';
  @Input({ required: true }) cocktails: Cocktail[] | null = null;
  constructor() {}
}
