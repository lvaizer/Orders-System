import {Link} from "react-router-dom";

export default function OrdersSideListItem(props) {
    const current = props.current ? 'current' : '';
    return (
        <div className={`orders__side-list-item ${current}`}>
            <Link to={props.link}>
                {props.title}
            </Link>
        </div>

    )
}
