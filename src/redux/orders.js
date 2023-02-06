import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    dates: [],
    years: [],
    orders: []
};

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: initialState,
    reducers: {
        setYears: (state, action) => {
            state.years = action.payload
        },
        setOrders: (state, action) => {
            state.orders = action.payload
        },
        setBookingSelected: (state, action) => {
            state.selectedBooking = action.payload;
        }
    }
})

export const {
    setYears,
    setOrders
} = ordersSlice.actions

export default ordersSlice.reducer
