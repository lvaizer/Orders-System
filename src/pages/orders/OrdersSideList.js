import OrdersSideListItem from "./components/OrdersSideListItem";
import {v4 as uuidv4} from 'uuid';

export default function OrdersSideList(props) {
    const {data, year, month, day, orderId} = props;

    function isCurrent(id) {
        if (orderId) return Number(id) === Number(orderId);
        if (day) return Number(id) === Number(day);
        if (month) return Number(id) === Number(month);
        return year && Number(id) === Number(year);
    }

    return (
        <section className="orders__side-list_container">
            <div className="orders__side-list_items_list">
                {data ? data.map(item =>
                        <OrdersSideListItem
                            current={isCurrent(item.id)}
                            key={uuidv4()}
                            {...item} />
                    )
                    :
                    <span>No items</span>
                }
            </div>
        </section>
    )
}
