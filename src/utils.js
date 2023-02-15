import {useState} from "react";
import moment from "moment";

export const isMailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim());
}

export const isPhoneValid = (phone) => {
    const re = /(0[0-9][0-9]-[0-9]{7})$|(0[0-9]-[0-9]{7})$|([0][0-9]{9})$|(0[0-9][0-9]-[0-9]{3}-[0-9]{4})$|(0[0-9]{8})$/;
    return re.test(phone.toString().replace(/ /g, ''));
}

export const useBoolean = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);

    return [value, setTrue, setFalse];
};

export const createServerDateFromDate = date => {
    return moment(date).format('YYYY-MM-DD HH:mm:ss')
}
