import OrdersSideList from "./OrdersSideList";
import {useParams} from 'react-router-dom';
import {useGetDates} from "../../QueryFactory";
import {useEffect, useState} from "react";
import OrdersMainOrdersList from "./OrdersMainOrdersList";
import OrdersMainDatesList from "./OrdersMainDatesList";
import OrdersPathHeader from "./components/OrdersPathHeader";
import Loader from "../../components/loader/Loader";
import {
    getDayName,
    getDaysListFromServerResponse,
    getMonthName,
    getMonthsListFromServerResponse,
    getYearsListFromServerResponse
} from "./OrdersUtils";


export default function OrdersMainContainer() {

    const {year, month, day} = useParams();

    const isDay = () => day;
    const isMonth = () => month && !day;
    const isYear = () => year && !month;

    const {data, error, isLoading} = useGetDates();

    const [years, setYears] = useState();
    const [months, setMonths] = useState();
    const [days, setDays] = useState();

    function getSideListElements() {
        if (!data) return;
        if (isYear()) return years;
        if (isMonth()) return months;
        if (isDay()) return days;
        return years;
    }

    useEffect(() => {
        if (data && data.message) {
            setYears(getYearsListFromServerResponse(data, year));
            setMonths(getMonthsListFromServerResponse(data, year, month));
            setDays(getDaysListFromServerResponse(data, year, month, day));
        }
    }, [data, year, month, day]);

    function getMainListElements() {
        if (isYear()) return months;
        if (isMonth()) return days;
        if (isDay()) return null;
        return null;
    }

    return (
        <div className="orders__main-container">
            {
                error ? <div>error occurred, please try again later</div> :
                    isLoading ? <Loader/> :
                        <>
                            <OrdersPathHeader
                                year={year}
                                month={month}
                                monthName={getMonthName(month)}
                                day={day}
                                dayName={getDayName(year, month, day)}
                            />
                            <div className="orders__main-container__content">
                                <OrdersSideList
                                    data={getSideListElements()}/>
                                {isDay() ?
                                    <OrdersMainOrdersList year={year} month={month} day={day}/> :
                                    <OrdersMainDatesList data={getMainListElements()}/>}
                            </div>
                        </>
            }
        </div>
    )
}
