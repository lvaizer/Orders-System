import {configureStore} from '@reduxjs/toolkit';
import booking from "./booking";

export default configureStore({
    reducer: {
        booking: booking
    }
});
