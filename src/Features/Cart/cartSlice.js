import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        value: {
            user: "",
            updatedAt: "",
            total: null,
            items: []
        }
    },
    reducers: {
        addCartItem: (state, action) => {
            //Logic to add item
            //1. Check productExists
            const productExists = state.value.items.some(item => item.id === action.payload.id)

            //2. Distinct logic if exists product or not
            if (productExists) {
                state.value.items = state.value.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
            } else state.value.items.push(action.payload)

            //3. Update total
            state.value.total = state.value.items.reduce(
                (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
                0
            )

            //4. Update updatedAt
            state.value.updatedAt = new Date().toLocaleString()
        },
        removeCartItem: (state,action) => {
            //Logic to remove item
            const itemToRemoveIndex = state.value.items.findIndex(item => item.id === action.payload.id);

            if (itemToRemoveIndex !== -1) {
                const removedItem = state.value.items.splice(itemToRemoveIndex, 1)[0];
                state.value.total -= removedItem.price * removedItem.quantity;
                state.value.updatedAt = new Date().toLocaleString();
            }
        },
        resetCart: (state) => {
            state.value.items = [];
            state.value.total = 0;
            state.value.updatedAt = "";
          },
    }
})

export const {addCartItem, removeCartItem, resetCart} = cartSlice.actions

export default cartSlice.reducer