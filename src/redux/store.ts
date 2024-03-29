import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createdRecipeReducer, selectedCategoriesReducer, themeReducer, userExpiredReducer, userReducer } from './slices';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';


const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  createdRecipe: createdRecipeReducer,
  selectedCategories: selectedCategoriesReducer,
});


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  transforms: [userExpiredReducer],
  blacklist: ['selectedCategories'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
