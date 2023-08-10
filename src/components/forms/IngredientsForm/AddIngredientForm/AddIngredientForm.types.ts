import { MEASUREMENT_TYPE } from '@/utils/types';
import { IProductData } from '@/api/interfaces/products.types';
import { Ingredient } from '@/redux/slices/created-recipe/created-recipe-slice.types';

export interface AddIngredientInputs {
  ingredient: Ingredient;
  measurement_type: MEASUREMENT_TYPE;
  measurement_value: number;
}

export interface AddIngredientFormProps {
  products: IProductData[];
  onSubmit: (ingredient: AddIngredientInputs) => void;
}
