import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from "../constants";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [] as ICartProduct[],
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action: PayloadAction<ICartProduct>) => {
      const product = action.payload;
      const newProducts = [...state.products, product];
      state.products = newProducts;
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const newProducts = state.products.filter((product) => product.id !== productId);
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
