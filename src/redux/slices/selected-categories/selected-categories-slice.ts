import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IDeleteCategory,
  SelectedCategoriesState,
  SelectedCategory,
} from '@/redux/slices/selected-categories/selected-categories-slice.types';
import { ICategory } from '@/api/interfaces/categories.types';

const initialState: SelectedCategoriesState = [];

const selectedCategoriesSlice = createSlice({
    name: 'selectedCategories',
    initialState: initialState,
    reducers: {
      addCategory: (state: SelectedCategoriesState, action: PayloadAction<SelectedCategory>) => {
        const { left_key: newLeftKey, right_key: newRightKey } = action.payload;
        const withoutChildren = state.filter(({ left_key, right_key }) =>
          !(left_key > newLeftKey && right_key < newRightKey));

        return [...withoutChildren, action.payload];
      },
      clearCategories: () => initialState,
      deleteCategory: (state: SelectedCategoriesState, action: PayloadAction<IDeleteCategory>) => {
        const { payload: { categoryToDelete, categories } } = action;

        const deleteByIndex = (index: number) => {
          state.splice(index, 1);
        };

        const findNextAncestorCategory = (categories: ICategory[], target: SelectedCategory) => {
          const nextParentCategory = categories.find(({ left_key, right_key }) =>
            left_key <= target.left_key && right_key >= target.right_key);

          return nextParentCategory;
        };

        const findCategory = (categories: ICategory[], target: SelectedCategory): ICategory | undefined => {
          let nextNode = findNextAncestorCategory(categories, target);

          while (nextNode && nextNode.id !== target.id) {
            nextNode = findNextAncestorCategory(nextNode.children, target);
          }

          return nextNode;
        };

        const selectChildren = (categories: ICategory, deletedCategory: SelectedCategory) => {
          const newSelections: SelectedCategory[] = categories.children
            .filter(({ left_key, right_key }) => {
              const isDeletedCategoryAncestor = left_key <= deletedCategory.left_key && right_key >= deletedCategory.right_key;
              return !isDeletedCategoryAncestor;
            })
            .map(({ id, parent_id, left_key, right_key }) => {
                return { id, parent_id, left_key, right_key };
              },
            );

          state.push(...newSelections);
        };

        const selectDependentBranches = (commonAncestor: ICategory, deletedCategory: SelectedCategory) => {
          let nextAncestor: ICategory | undefined = commonAncestor;

          while (nextAncestor) {
            selectChildren(nextAncestor, deletedCategory);
            nextAncestor = findNextAncestorCategory(nextAncestor.children, deletedCategory);
          }
        };

        const deleteFromAncestor = () => {
          const firstSelectedAncestorIndex = state.findIndex(({ left_key, right_key }) =>
            left_key < categoryToDelete.left_key && right_key > categoryToDelete.right_key);

          const firstSelectedAncestor = state[firstSelectedAncestorIndex];
          const ancestorCategoryNode = findCategory(categories, firstSelectedAncestor) as ICategory;

          selectDependentBranches(ancestorCategoryNode, categoryToDelete);
          deleteByIndex(firstSelectedAncestorIndex);
        };

        const categoryToDeleteIndex = state.findIndex(({ id }) => id === categoryToDelete.id);

        if (categoryToDeleteIndex !== -1) {
          deleteByIndex(categoryToDeleteIndex);
        } else {
          deleteFromAncestor();
        }
      },
    },
  },
);

const { actions, reducer } = selectedCategoriesSlice;

export { reducer as selectedCategoriesReducer };
export const {
  addCategory,
  clearCategories,
  deleteCategory,
} = actions;
