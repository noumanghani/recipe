import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {RecipeComponent} from "./recipe/recipe.component";
import {ShopListComponent} from "./shop-list/shop-list.component";
import {RecipeStartComponent} from "./recipe/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./recipe/recipe-detail/recipe-detail.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component:RecipeComponent, children: [
    {path: '', component:RecipeStartComponent},
    {path: ':id', component:RecipeDetailComponent}
  ] },
  {path: 'shopping-list', component:ShopListComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class appRoutingModule {

}