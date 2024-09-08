import { createSlice } from "@reduxjs/toolkit";

export interface iProps {
  value: Boolean;
}

const initialState = {
  index: 0,
  userName: "Peter",
  // paths: "",
  value: false,
};

const redux = createSlice({
  name: "second",
  initialState,
  reducers: {
    setIndex: (state, { payload }) => {
      return (state.index = payload);
    },
    createUserName: (state: { userName: string }, { payload }) => {
      state.userName = payload;
    },
    // setPaths: (state: { paths: string }, { payload }) => {
    //   state.paths = payload;
    // },
    setValue: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setIndex, createUserName, setValue } = redux.actions;

export default redux.reducer;
