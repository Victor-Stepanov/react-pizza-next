import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzaIfNotExists = createAsyncThunk(
  "pizza/fetchPizzaIfNotExists",
  async () => {
    const response = await fetch(
      "https://645fb28afe8d6fb29e246f69.mockapi.io/items"
    );
    return response.json();
  }
);
