import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/orders/NotFound";
import MainLayout from "./layouts/MainLayout";
import OrdersMainContainer from "./pages/orders/OrdersMainContainer";

export default function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/orders" element={<OrdersMainContainer/>}>
                        <Route path=":year" element={<></>}/>
                        <Route path=":year/:month" element={<></>}/>
                        <Route path=":year/:month/:day" element={<></>}/>
                        <Route path=":year/:month/:day/:orderId" element={<></>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

