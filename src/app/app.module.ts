import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopEditComponent } from './shop-list/shop-edit/shop-edit.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import {DropdownDirective} from "./shared/dropdown.directive";
// import {RecipeService} from "./recipe/recipe.service";
import {ShopListService} from "./shop-list/shop-list.service";
import {appRoutingModule} from "./app-routing.module";
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopListComponent,
    ShopEditComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeStartComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutingModule
  ],
  providers: [ ShopListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
