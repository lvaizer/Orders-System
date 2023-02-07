import {Link} from "react-router-dom";
import {useState} from "react";
import {isMailValid, isPhoneValid} from "../../../utils";

export default function OrdersMainListOrderItem(props) {
    const [data, setDate] = useState(props)

    function onDateChanged(newData) {
        setDate({...data, [newData.target.name]: newData.target.value});
        //save
    }

    return (
        <tbody>
        <tr className="orders__main-list-booking-item">
            <td>
                {data.index}
            </td>
            <td>
                {data.id}
            </td>
            <td>
                <input className="orders__main-list-booking-item_input" type="text"
                       name="first_name" onChange={onDateChanged}
                       value={data.first_name}/>
            </td>
            <td>
                <input className="orders__main-list-booking-item_input" type="text"
                       name="last_name"
                       value={data.last_name} onChange={onDateChanged}/>
            </td>
            <td>
                <input className="orders__main-list-booking-item_input" type="tel"
                       name="phone"
                       value={data.phone} onChange={onDateChanged}/>
                {isPhoneValid(data.phone) ?
                    <Link target="_blank" to='#'
                          onClick={(e) => {
                              window.location.href = `tel:${data.phone}`
                              e.preventDefault();
                          }}>call</Link>
                    : ''}

            </td>
            <td>
                <input className="orders__main-list-booking-item_input" type="tel"
                       name="email"
                       value={data.email} onChange={onDateChanged}/>
                {isMailValid(data.email) ?
                    <Link target="_blank"
                          to='#'
                          onClick={(e) => {
                              window.open(`mailto:${data.email}`, '_blank')
                              e.preventDefault();
                          }}>Send email</Link> :
                    ''}

            </td>
            <td>
                <input className="orders__main-list-booking-item_input" type="number"
                       name="price"
                       value={data.price} onChange={onDateChanged}/>
            </td>
            <td>
                <select className="orders__main-list-booking-item_input" name="status"
                        value={data.status} onChange={onDateChanged}>
                    <option value="pending">pending</option>
                    <option value="approved">approved</option>
                </select>
            </td>
            <td>
                <input className="orders__main-list-booking-item_input" type="text"
                       name="notes"
                       value={data.notes} onChange={onDateChanged}/>
            </td>
        </tr>
        </tbody>
    )
}
