import { MEASUREMENT_TYPE } from '@/utils/types';

export interface Ingredient {
  id: number;
  name: string;
  measurement_type: MEASUREMENT_TYPE;
  measurement_value: number;
}

export interface Step {
  content: string;
  img?: string;
}

export interface Description {
  title: string;
  description: string;
  img: string;
  time: number;
  servings_number: number;
}

export interface CreatedRecipeState {
  description: Description | null;
  ingredients: Ingredient[];
  steps: Step[];
}

export interface UpdateStep {
  index: number;
  step: Step;
}
