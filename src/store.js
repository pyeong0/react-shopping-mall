import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "user", age: "20" },
  reducers: {
    changeName(state) {
      return "john " + state;
    },
  },
});

export let { changeName } = user.actions;

let cart = createSlice({
  name: "cart",
  initialState: [
    // { id: 2, name: "크롭 히든밴딩 세미와이드", count: 2 },
    // { id: 7, name: "풀밴딩 테이퍼드", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => a.id === action.payload);
      state[번호].count++;
    },
    addItem(state, action) {
      return [...state, action.payload];
    },
  },
});

export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
