// FavouriteRecipe

export interface IFavouriteRecipe {
  id: number;
  recipe_id: number;
  user_id: number;
}

// Rating

export interface IRating {
  id: number,
  score: number,
  user_id: number,
  recipe_id: number
}
