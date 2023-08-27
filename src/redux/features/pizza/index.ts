import { IPizza } from "@/types";
import { Statuses } from "@/types/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const pizzaEntityAdapter = createEntityAdapter<IPizza>();

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: pizzaEntityAdapter.getInitialState({
    loadingStatus: Statuses.Idle,
  }),
  reducers: {},
});

export const pizzaReducer = pizzaSlice.reducer;
export const { selectById, selectIds } = pizzaEntityAdapter.getSelectors();
