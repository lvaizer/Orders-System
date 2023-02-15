import {forwardRef, useState} from "react";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TextField} from "@mui/material";

export const OrdersNewOrderBody = forwardRef(({error}, ref) => {

    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        price: 0,
        notes: '',
        date: new Date()
    });

    function handleInputChanged(e) {
        setState(prevState => {
            return {...prevState, [e.target.name]: e.target.value};
        });
    }

    return (
        <form ref={ref} className="orders__new_order_body-form">
            <div className="orders__new_order_body-input_div">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        inputFormat="DD/MM/YYYY"
                        label="Date"
                        value={state['date']}
                        onChange={(newValue) => handleInputChanged({
                            target: {
                                name: 'date',
                                value: new Date(newValue)
                            }
                        })}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <input style={{display: 'none'}} type='text' name="date" id="date"
                       value={state['date']}/>
            </div>
            <div className="orders__new_order_body-input_div">
                <label htmlFor="first_name">First name</label>
                <input type='text' name="first_name" id="first_name"
                       onChange={handleInputChanged}
                       defaultValue={state['first_name']}/>
            </div>
            <div className="orders__new_order_body-input_div">
                <label htmlFor="last_name">Last name</label>
                <input type='text' name="last_name" id="last_name"
                       onChange={handleInputChanged}
                       defaultValue={state['last_name']}/>
            </div>
            <div className="orders__new_order_body-input_div">
                <label htmlFor="phone">Phone number</label>
                <input type='tel' name="phone" id="phone"
                       onChange={handleInputChanged}
                       defaultValue={state['phone']}/>
            </div>
            <div className="orders__new_order_body-input_div">
                <label htmlFor="email">Email</label>
                <input type='email' name="email" id="email"
                       onChange={handleInputChanged}
                       defaultValue={state['email']}/>
            </div>
            <div className="orders__new_order_body-input_div">
                <label htmlFor="price">Price</label>
                <input type='number' name="price" id="price"
                       onChange={handleInputChanged}
                       defaultValue={state['price']}/>
            </div>
            <div className="orders__new_order_body-input_div">
                <label htmlFor="notes">Notes</label>
                <textarea name="notes" id="notes"
                          onChange={handleInputChanged}
                          defaultValue={state['notes']}/>
            </div>
            <div className="orders__new_order-error">{error && error}</div>
        </form>
    )
})
