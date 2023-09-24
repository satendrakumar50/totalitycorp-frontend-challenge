import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        item:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(state.payload);
        },
        clearItem:(state,action)=>{
            state.item=[];
        },

    }

})

export const {addItem,clearItem}=cartSlice.actions;
export default cartSlice.reducer;