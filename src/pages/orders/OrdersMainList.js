import OrdersSideListItem from "./components/OrdersSideListItem";
import OrdersMainListOrderItem from "./components/OrdersMainListOrderItem";
import {v4 as uuidv4} from "uuid";

export default function OrdersMainList(props) {
    const {data, isDay} = props;

    function getHeadersData() {
        return <thead>
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
    }

    return (
        <section className="orders__main-list_container">
            <div className="orders__main-list_items_list">
                {data ?
                    isDay ? <table>
                            {getHeadersData()}
                            {data.map((item, index) =>
                                <OrdersMainListOrderItem
                                    key={uuidv4()}
                                    index={index + 1}
                                    {...item}/>
                            )}
                        </table>
                        : data.map((item, index) =>
                            isDay ?
                                <OrdersMainListOrderItem
                                    key={uuidv4()}
                                    index={index + 1}
                                    {...item}/>
                                :
                                <OrdersSideListItem
                                    key={uuidv4()}
                                    {...item} />
                        )
                    :
                    <span>Select item from the list to the left</span>
                }
            </div>
        </section>
    )
}
