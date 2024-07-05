# Meal API

Meal API is a simple JavaScript module that allows you to fetch meal information from TheMealDB. It provides a function to search for meals by name and retrieve detailed information about them.

## Installation

You can install this module using npm:

```bash
npm install meal-api


## Usage

import { mealApi } from 'meal-api';


## Example code

import { mealApi } from 'meal-api';

const fetchMeal = async () => {
  try {
    const data = await mealApi("cake");
    console.log(data);
  } catch (error) {
    console.error("Error fetching meal data:", error);
  }
};

fetchMeal();

## Example response

{
  "meals": [
    {
      "idMeal": "52772",
      "strMeal": "Chocolate Cake",
      "strCategory": "Dessert",
      "strArea": "American",
      "strInstructions": "Recipe instructions...",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      "strIngredient1": "Chocolate",
      "strIngredient2": "Flour",
      ...
    },
    ...
  ]
}
