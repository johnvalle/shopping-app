import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [] as number[],
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const newProducts = [...state.products, productId];
      state.products = newProducts;
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const newProducts = state.products.filter((id) => id !== productId);
      state.products = newProducts;
    },
    setQuantity: (state, action: PayloadAction<number>) => {
      const quantity = action.payload;
      state.quantity += quantity;
    },
  },
});

export const { addProduct, removeProduct, setQuantity } = cartSlice.actions;

export default cartSlice.reducer;
