import './header.css';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <nav className="header_navbar">
                <ul className="header_navbar_list">
                    <li className="header_navbar_list-item">
                        <Link className="clear-link" to="/">Home</Link>
                    </li>
                    <li className="header_navbar_list-item">
                        <Link className="clear-link" to="/orders/2023">Orders</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
