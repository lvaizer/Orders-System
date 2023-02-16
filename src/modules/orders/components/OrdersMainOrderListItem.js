import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import {isMailValid, isPhoneValid} from "../../../utils";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {IconButton} from "@mui/material";
import Modal from "../../../components/modal/Modal";
import {DeleteOrder, UpdateOrder} from "../../../QueryFactory";
import debounce from 'lodash.debounce'

export default function OrdersMainOrderListItem(props) {

    const [data, setDate] = useState(props.item);
    const [showDelete, setShowDelete] = useState();

    const debouncedFunctionRef = useRef();

    const updateOrderMutation = UpdateOrder();
    const deleteOrderMutation = DeleteOrder();


    function onDateChanged(changes) {
        setDate(prevData => {
            const newData = {...prevData, [changes.target.name]: changes.target.value}
            debouncedFunctionRef.current(newData);
            return newData;
        });
    }

    if (!debouncedFunctionRef.current) {
        debouncedFunctionRef.current = debounce((newData) => {
            updateOrderMutation.mutate(newData);
        }, 500, {trailing: true});
    }

    function handleDeleteClicked() {
        setShowDelete(true)
    }

    function hideDeleteOrderModal() {
        setShowDelete(false);
    }

    function handleDeleteOrder() {
        setShowDelete(false);
        // noinspection JSCheckFunctionSignatures
        deleteOrderMutation.mutate(data, {onSuccess: props.refresh});
    }

    return (
        <>
            <tr className="orders_main_orders_list__row-item">
                <td>
                    <Modal
                        showModal={showDelete}
                        body={<h3 style={{textAlign: 'center'}}>Are you sure you want to delete
                            order
                            number {data.id}?</h3>}
                        cancelButton={"Cancel"}
                        title={'Delete Order'}
                        onCloseClick={hideDeleteOrderModal}
                        saveButton={"Delete"}
                        onSaveButtonClicked={handleDeleteOrder}
                    />
                    {props.index}
                </td>
                <td>
                    {data.id}
                </td>
                <td>
                    <input className="orders_main_orders_list__item_input" type="text"
                           name="first_name" onChange={onDateChanged}
                           value={data['first_name']}/>
                </td>
                <td>
                    <input className="orders_main_orders_list__item_input" type="text"
                           name="last_name"
                           value={data['last_name']} onChange={onDateChanged}/>
                </td>
                <td>
                    <input className="orders_main_orders_list__item_input" type="tel"
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
                    <input className="orders_main_orders_list__item_input" type="tel"
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
                    <input className="orders_main_orders_list__item_input" type="number"
                           name="price"
                           value={data['price']} onChange={onDateChanged}/>
                </td>
                <td>
                    <select className="orders_main_orders_list__item_input" name="status"
                            value={data.status} onChange={onDateChanged}>
                        <option value="pending">pending</option>
                        <option value="approved">approved</option>
                    </select>
                </td>
                <td>
                    <textarea className="orders_main_orders_list__item_input"
                              name="notes"
                              defaultValue={data['notes'] ? data['notes'] : ''}
                              onChange={onDateChanged}/>
                </td>
                <td>
                    <IconButton
                        onClick={handleDeleteClicked}
                        aria-label="delete">
                        <DeleteOutlineIcon/>
                    </IconButton>
                </td>
            </tr>
        </>
    )
}
