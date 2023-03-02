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
                    <Route key="orders_router" path="/orders" element={<OrdersMainContainer/>}>
                        <Route path=":year" element={<></>}/>
                        <Route path=":year/:month" element={<></>}/>
                        <Route path=":year/:month/:day" element={<></>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

