import {
  CreatedRecipeState,
  Description,
  Ingredient,
  Step,
  UpdateStep,
} from '@/redux/slices/created-recipe/created-recipe-slice.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CreatedRecipeState = {
  description: null,
  ingredients: [],
  steps: [],
};

const createdRecipeSlice = createSlice({
    name: 'createdRecipe',
    initialState: initialState,
    reducers: {
      setDescription: (state: CreatedRecipeState, action: PayloadAction<Description>) => {
        state.description = action.payload;
      },
      clearDescription: (state: CreatedRecipeState) => {
        state.description = null;
      },
      addIngredient: (state: CreatedRecipeState, action: PayloadAction<Ingredient>) => {
        state.ingredients.push(action.payload);
      },
      deleteIngredientById: (state: CreatedRecipeState, action: PayloadAction<number>) => {
        const index = state.ingredients.findIndex(({ id }) => id === action.payload);
        state.ingredients.splice(index, 1);
      },
      addStep: (state: CreatedRecipeState, action: PayloadAction<Step>) => {
        state.steps.push(action.payload);
      },
      setStep: (state: CreatedRecipeState, action: PayloadAction<UpdateStep>) => {
        const { payload: { step, index } } = action;
        state.steps[index] = step;
      },
      deleteStepByIndex: (state: CreatedRecipeState, action: PayloadAction<number>) => {
        const index = action.payload;
        state.steps.splice(index, 1);
      },
      clearCreatedRecipe: () => initialState,
    },
  },
);

const { actions, reducer } = createdRecipeSlice;

export { reducer as createdRecipeReducer };
export const {
  setDescription,
  clearDescription,
  addIngredient,
  deleteIngredientById,
  addStep,
  setStep,
  deleteStepByIndex,
  clearCreatedRecipe,
} = actions;
