import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")): [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            const itemIndex = state.cartItems.findIndex((e) => e.id === action.payload.id);

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`increased ${state.cartItems[itemIndex].title} product to cart`, {
                    position: "bottom-right",
                });
            } else{
                const temProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(temProduct);
                toast.success(`${action.payload.title} added to cart`, {
                    position: "bottom-right",
                });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action){
           const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            );
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.error(`${action.payload.title} removed from cart`, {
                position: "bottom-right",
            });
        },
        decreaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.info(`Decreased ${state.cartItems[itemIndex].title} product quantity`, {
                    position: "bottom-right",
                });
            }else if(state.cartItems[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                );
                state.cartItems = nextCartItems;
             
                toast.error(`${action.payload.title} removed from cart`, {
                    position: "bottom-right",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        getTotals(state, action){
            let { total, quantity} = state.cartItems.reduce((cartTotal, cartItem) =>{
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            },{
                total: 0,
                quantity: 0
            });
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    },
});

export const { addToCart, removeFromCart, decreaseCart, getTotals } = CartSlice.actions;

export default CartSlice.reducer;