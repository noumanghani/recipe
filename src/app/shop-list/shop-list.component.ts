import { Component, OnInit } from '@angular/core';

import {Ingredient} from "../shared/ingredient.model";
import {ShopListService} from "./shop-list.service";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private slService: ShopListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
        .subscribe(
            (ingredients: Ingredient[]) => {
              this.ingredients = ingredients;
            }
        );
  }

}

