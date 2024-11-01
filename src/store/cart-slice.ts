// In Redux data store works with slices - can have multiple different slices which can make up overall store
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Type annotation for object used to store cart items
export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

// Create a new slice with createSlice method from redux and store to a variable to export and use in main store in store.ts file
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  // reducers key needed to add object of methods which will be used to update state
  reducers: {
    // TS will auto infer state and action types but best practice to include PayLoadAction as a type of action param (imported from redux)
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      // Use findIndex method on object in state array to see if it currently exists
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // Redux allows to mutate state directly so don't need to create shallow copies of state before updating
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Removing items will only need id of item to work (will be type string in state) - only need to pass type as string to action param
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

// export reducer methods from slice to use in code base - can destructure from slice.actions (Redux will auto set up all action types)
export const { addToCart, removeFromCart } = cartSlice.actions;
