import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./NotFound";
import MainLayout from "./layouts/MainLayout";
import OrdersMainContainer from "./modules/orders/OrdersMainContainer";

export default function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/orders" element={<OrdersMainContainer/>}/>
                    <Route path="/orders/:year" element={<OrdersMainContainer/>}/>
                    <Route path="/orders/:year/:month" element={<OrdersMainContainer/>}/>
                    <Route path="/orders/:year/:month/:day" element={<OrdersMainContainer/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

