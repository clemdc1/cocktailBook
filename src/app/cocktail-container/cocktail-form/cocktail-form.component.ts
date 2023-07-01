import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { first } from 'rxjs';
import { Cocktail } from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktail-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss'],
})
export class CocktailFormComponent implements OnInit {
  public cocktail?: Cocktail;
  public cocktailForm: FormGroup = this.initForm();
  public get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null) {
        this.cocktailService
          .getCocktail(Number(index))
          .pipe(first((x) => !!x))
          .subscribe((cocktail: Cocktail) => {
            this.cocktail = cocktail;
            this.cocktailForm = this.initForm(this.cocktail);
          });
      } else {
        this.cocktailForm = this.initForm(this.cocktail);
      }
    });
  }

  private initForm(
    cocktail: Cocktail = {
      name: '',
      description: '',
      img: '',
      ingredients: [],
    }
  ): FormGroup {
    return this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.fb.array(
        cocktail.ingredients.map((ingredient) =>
          this.fb.group({
            name: [ingredient.name, Validators.required],
            quantity: [ingredient.quantity, Validators.required],
          })
        ),
        Validators.required
      ),
    });
  }
  public submit(): void {
    if (this.cocktail?._id) {
      this.cocktailService
        .editCocktail(this.cocktail._id, this.cocktailForm.value)
        .subscribe();
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value).subscribe();
    }
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
  public addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
      })
    );
  }
}
