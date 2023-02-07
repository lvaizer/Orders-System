import OrdersOrderItem from "./components/OrdersOrderItem";
import {v4 as uuidv4} from "uuid";
import {useGetOrders} from "../../QueryFactory";
import Loader from "../../components/loader/Loader";

export default function OrdersMainOrdersList(props) {

    const {year, month, day} = props;

    const {data, isLoading, error} = useGetOrders(year, month, day)

    return (
        <section className="orders__main-list_container">
            <div className="orders__main-list_items_list">
                {
                    error ? <div>error occurred, please try again later</div> :
                        isLoading ? <Loader/> :
                            data && data.message && data.message.length > 0 ?
                                <table>
                                    <thead>
                                    <tr className="orders__main-list-booking-item">
                                        <th>#</th>
                                        <th>id</th>
                                        <th>First name</th>
                                        <th>Last name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Notes</th>
                                    </tr>
                                    </thead>
                                    {data && data.message.map((item, index) =>
                                        <OrdersOrderItem
                                            key={uuidv4()}
                                            index={index + 1}
                                            {...item}/>
                                    )}
                                </table>
                                :
                                <span>Select item from the list to the left</span>
                }
            </div>
        </section>
    )
}
