import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createdRecipeReducer, selectedFiltersReducer, themeReducer, userExpiredReducer, userReducer } from './slices';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';


const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  createdRecipe: createdRecipeReducer,
  selectedFilters: selectedFiltersReducer,
});


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  transforms: [userExpiredReducer],
  blacklist: ['selectedFilters'],
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
