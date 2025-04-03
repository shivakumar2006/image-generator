import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    images: [], // stored generated images... 
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {

    }
})

export const { } = uiSlice.actions;

export default uiSlice.reducer;