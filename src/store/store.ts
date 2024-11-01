// Redux store setup logic placed in this file
import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

// 1st step to configure storage to save state to with redux - use configureStore method to create
// Pass in object of options which works with data store - pass in reducer method which will be used to update store with redux
export const store = configureStore({
  // under reducer key add slice created in cart-slice.ts file to assign as reducer method to main store here
  reducer: {
    cart: cartSlice.reducer,
  },
});

// Store the type of dispatch method from store - use typeof key to grab the type to store type annotation
// Can now use with custom hook created to use dispatch method in hooks.ts file
export type AppDispatch = typeof store.dispatch;

// Use ReturnType generic (built in TS) to grab the return type of getState function from above store (Will return the shape and any properties that the state uses) - Will return the current state value from cart reducer
export type RootState = ReturnType<typeof store.getState>;
