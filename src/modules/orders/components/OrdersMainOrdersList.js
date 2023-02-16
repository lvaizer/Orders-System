import OrdersMainOrderListItem from "./OrdersMainOrderListItem";
import {v4 as uuidv4} from "uuid";
import Loader from "../../../components/loader/Loader";

export default function OrdersMainOrdersList(props) {

    const {refresh, orders, isLoading, error} = props;

    return (
        <section className="orders__main-list_container">
            <div className="orders__main-list_items_list">
                {
                    error ? <div>error occurred, please try again later</div> :
                        isLoading ? <Loader/> :
                            orders && orders.message && orders.message.length > 0 ?
                                <table>
                                    <thead>
                                    <tr className="orders_main_orders_list__row-header-item">
                                        <th>#</th>
                                        <th>id</th>
                                        <th>First name</th>
                                        <th>Last name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Notes</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {orders.message.map((item, index) =>
                                        <OrdersMainOrderListItem
                                            refresh={refresh}
                                            key={uuidv4()}
                                            index={index + 1}
                                            item={item}/>
                                    )}
                                    </tbody>
                                </table>
                                :
                                <span>Select item from the list to the left</span>
                }
            </div>
        </section>
    )
}
