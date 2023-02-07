import OrdersBasicListItem from "./components/OrdersBasicListItem";
import {v4 as uuidv4} from "uuid";

export default function OrdersMainDatesList(props) {
    const {data} = props;

    return (
        <section className="orders__main-list_container">
            <div className="orders__main-list_items_list">
                {
                    data ? data.map(item =>
                            <OrdersBasicListItem
                                key={uuidv4()}
                                {...item} />)
                        :
                        <span>Select item from the list to the left</span>
                }
            </div>
        </section>
    )
}
