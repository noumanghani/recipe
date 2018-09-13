import {EventEmitter,Injectable} from "@angular/core";

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShopListService} from "../shop-list/shop-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>(); // it will hold recipe data

  private recipes: Recipe[] = [
    new Recipe(
        'Tasty Shintzel', 'A Super Tasty - just awsome',
        'http://hopenotout.pk/burger/uploads/1.png',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fires', 20),
        ]),
    new Recipe(
        'Big Fat burger',
        'What else you need to say?',
        'http://hopenotout.pk/burger/uploads/2.png',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1),
        ])
  ];

  constructor(private slService: ShopListService){}

  getRecipes() {
    return this.recipes.slice(); // .slice will provide only copy of array.
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredsToShopList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

}
