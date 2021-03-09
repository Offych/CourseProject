import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('True Recipe', 'This is a test fot true Recipe', 
    "https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg"),
    new Recipe('A test Second Recipe', 'This is a test', 
    "https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
