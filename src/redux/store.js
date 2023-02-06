import {configureStore} from '@reduxjs/toolkit';
import ordersReducer from './orders';

export default configureStore({
    reducer: {
        orders: ordersReducer
    }
});
