import './header.css';
import {Link} from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';

export default function Header() {

    const MENU_ITEMS = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'Orders',
            link: '/orders',
        }
    ]

    return (
        <div className="header">
            <ul className="header_navbar_list">
                {
                    MENU_ITEMS.map(item =>
                        <li key={item.link} className="header_navbar_list-item">
                            <Link className="clear-link" to={item.link}>{item.title}</Link>
                        </li>
                    )
                }
            </ul>
            <div>
                <IconButton size="large" color="inherit">
                    <AccountCircle/>
                </IconButton>
            </div>
        </div>
    )
}
