import { Control } from 'react-hook-form';
import { AddIngredientInputs } from '@/components/forms/IngredientsForm/AddIngredientForm/AddIngredientForm.types';
import { IProductData } from '@/api/interfaces/products.types';

export type Option = Omit<IProductData, 'name'> & {
  label: string;
}

export interface IngredientsAutocompleteProps {
  control: Control<AddIngredientInputs>;
  products: IProductData[];
}
