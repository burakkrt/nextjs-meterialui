'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { IRootParams } from './types';
import { configureStore } from '@reduxjs/toolkit';

//Slicer
import chanceModeSlice from './slicer/chanceModeSlice';

const store = configureStore({
  reducer: {
    mode: chanceModeSlice,
  },
});

const ReduxProvider: React.FC<IRootParams> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
