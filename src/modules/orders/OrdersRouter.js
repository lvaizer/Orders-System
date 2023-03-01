import {Route} from "react-router-dom";
import OrdersMainContainer from "./OrdersMainContainer";

export default [<Route key="orders_router" path="/orders_system/orders" element={<OrdersMainContainer/>}>
    <Route path=":year" element={<></>}/>
    <Route path=":year/:month" element={<></>}/>
    <Route path=":year/:month/:day" element={<></>}/>
</Route>]
