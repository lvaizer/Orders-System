import {createSlice} from '@reduxjs/toolkit'
import {ORDERS} from "../DATA";

const initialState = {
    selectedView: 'month',
    selectedMonth: new Date().getMonth() + 1,
    selectedDay: new Date().getDate(),
    selectedJourney: '',
    selectedBooking: 0,
    bookings: ORDERS
};

export const bookingSlice = createSlice({
    name: 'booking',
    initialState: initialState,
    reducers: {
        setSelectedMonth: (state, action) => {
            state.selectedMonth = action.payload
        },
        setSelectedDay: (state, action) => {
            state.selectedDay = action.payload
        },
        setSelectedJourney: (state, action) => {
            state.selectedJourney = action.payload
        },
        setBookingSelected: (state, action) => {
            state.selectedBooking = action.payload;
        }
    }
})

export const {
    setSelectedMonth,
    setSelectedDay,
    setSelectedJourney,
    setBookingSelected
} = bookingSlice.actions

export default bookingSlice.reducer
