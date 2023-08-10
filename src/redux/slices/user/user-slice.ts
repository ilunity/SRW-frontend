import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetUserState, UserState } from './user-slice.types';
import expireReducer from 'redux-persist-expire';
import { TOKEN_EXPIRES } from '@/utils/consts';

const initialState: UserState = {
  payload: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
      setUser: {
        reducer: (state: UserState, action: PayloadAction<ISetUserState>) => {
          state.payload = {
            ...action.payload,
          };
        },
        prepare: (payload: ISetUserState) => {
          return { payload };
        },
      },
      clearUser: (state: UserState) => {
        state.payload = null;
      },
    },
  },
);

const { actions, reducer } = userSlice;

const SECONDS_AT_DAY = 86400;
export const userExpiredReducer = expireReducer('user', {
  expireSeconds: TOKEN_EXPIRES * SECONDS_AT_DAY,
  expiredState: initialState,
  autoExpire: true,
});

export { reducer as userReducer };
export const { setUser, clearUser } = actions;
