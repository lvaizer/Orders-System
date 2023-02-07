import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./NotFound";
import MainLayout from "./layouts/MainLayout";
import ordersRouter from "./modules/orders/OrdersRouter";

export default function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    {ordersRouter}
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

