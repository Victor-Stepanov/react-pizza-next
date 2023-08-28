import { IPizza } from "@/types";
import { Statuses } from "@/types/statuses";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { fetchPizzaIfNotExists } from "./thunks";

export const pizzaEntityAdapter = createEntityAdapter<IPizza>();

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: pizzaEntityAdapter.getInitialState({
    loadingStatus: Statuses.Idle,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzaIfNotExists.pending, (state) => {
        state.loadingStatus = Statuses.Pending;
      })
      .addCase(fetchPizzaIfNotExists.fulfilled, (state, { payload }) => {
        state.loadingStatus = Statuses.Pending;
        pizzaEntityAdapter.setAll(state, payload);
      })
      .addCase(fetchPizzaIfNotExists.rejected, (state) => {
        state.loadingStatus = Statuses.Failed;
      });
  },
});

export const pizzaReducer = pizzaSlice.reducer;
export const { selectById, selectIds } = pizzaEntityAdapter.getSelectors();
