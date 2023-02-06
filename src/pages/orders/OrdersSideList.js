import OrdersSideListItem from "./components/OrdersSideListItem";
import {v4 as uuidv4} from 'uuid';

export default function OrdersSideList(props) {
    return (
        <section className="orders__side-list_container">
            <div className="orders__side-list_items_list">
                {props.data && props.data.length > 0 ?
                    props.data.map(item =>
                        <OrdersSideListItem key={uuidv4()} {...item}/>
                    ) :
                    <span>No items</span>
                }
            </div>
        </section>
    )
}
