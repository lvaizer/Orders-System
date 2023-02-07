import {Link} from "react-router-dom";

export default function OrdersBasicListItem(props) {

    const current = props.isCurrent ? 'current' : '';

    return (
        <div className={`orders__side-list-item ${current}`}>
            <Link to={props.link}>
                {props.title}
            </Link>
        </div>

    )
}