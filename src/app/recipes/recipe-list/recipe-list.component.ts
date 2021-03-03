import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a test', 
    "https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
