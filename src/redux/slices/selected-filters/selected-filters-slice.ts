import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IDeleteFilter,
  SelectedFilter,
  SelectedFiltersState,
} from '@/redux/slices/selected-filters/selected-filters-slice.types';
import { IFiltersData } from '@/api/interfaces/filters.types';

const initialState: SelectedFiltersState = [];

const selectedFiltersSlice = createSlice({
    name: 'selectedFilters',
    initialState: initialState,
    reducers: {
      addFilter: (state: SelectedFiltersState, action: PayloadAction<SelectedFilter>) => {
        const { left_key: newLeftKey, right_key: newRightKey } = action.payload;
        const withoutChildren = state.filter(({ left_key, right_key }) =>
          !(left_key > newLeftKey && right_key < newRightKey));

        return [...withoutChildren, action.payload];
      },
      clearFilters: () => initialState,
      deleteFilter: (state: SelectedFiltersState, action: PayloadAction<IDeleteFilter>) => {
        const { payload: { filterToDelete, filters } } = action;

        const deleteByIndex = (index: number) => {
          state.splice(index, 1);
        };

        const findNextAncestorFilter = (filters: IFiltersData[], target: SelectedFilter) => {
          const nextParentFilter = filters.find(({ left_key, right_key }) =>
            left_key <= target.left_key && right_key >= target.right_key);

          return nextParentFilter;
        };

        const findFilter = (filters: IFiltersData[], target: SelectedFilter): IFiltersData | undefined => {
          let nextNode = findNextAncestorFilter(filters, target);

          while (nextNode && nextNode.id !== target.id) {
            nextNode = findNextAncestorFilter(nextNode.children, target);
          }

          return nextNode;
        };

        const selectChildren = (filter: IFiltersData, deletedFilter: SelectedFilter) => {
          const newSelections: SelectedFilter[] = filter.children
            .filter(({ left_key, right_key }) => {
              const isDeletedFilterAncestor = left_key <= deletedFilter.left_key && right_key >= deletedFilter.right_key;
              return !isDeletedFilterAncestor;
            })
            .map(({ id, parent_id, left_key, right_key }) => {
                return { id, parent_id, left_key, right_key };
              },
            );

          state.push(...newSelections);
        };

        const selectDependentBranches = (commonAncestor: IFiltersData, deletedFilter: SelectedFilter) => {
          let nextAncestor: IFiltersData | undefined = commonAncestor;

          while (nextAncestor) {
            selectChildren(nextAncestor, deletedFilter);
            nextAncestor = findNextAncestorFilter(nextAncestor.children, deletedFilter);
          }
        };

        const deleteFromAncestor = () => {
          const firstSelectedAncestorIndex = state.findIndex(({ left_key, right_key }) =>
            left_key < filterToDelete.left_key && right_key > filterToDelete.right_key);

          const firstSelectedAncestor = state[firstSelectedAncestorIndex];
          const ancestorFilterNode = findFilter(filters, firstSelectedAncestor) as IFiltersData;

          selectDependentBranches(ancestorFilterNode, filterToDelete);
          deleteByIndex(firstSelectedAncestorIndex);
        };

        const filterToDeleteIndex = state.findIndex(({ id }) => id === filterToDelete.id);

        if (filterToDeleteIndex !== -1) {
          deleteByIndex(filterToDeleteIndex);
        } else {
          deleteFromAncestor();
        }
      },
    },
  },
);

const { actions, reducer } = selectedFiltersSlice;

export { reducer as selectedFiltersReducer };
export const {
  addFilter,
  clearFilters,
  deleteFilter,
} = actions;
