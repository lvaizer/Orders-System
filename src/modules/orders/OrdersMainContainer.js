import OrdersSideList from "./components/OrdersSideList";
import {useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from "react";
import OrdersMainOrdersList from "./components/OrdersMainOrdersList";
import OrdersMainDatesList from "./components/OrdersMainDatesList";
import OrdersPathHeader from "./components/OrdersPathHeader";
import Loader from "../../components/loader/Loader";
import {
    getDayName,
    getDaysListFromServerResponse,
    getMonthName,
    getMonthsListFromServerResponse,
    getYearsListFromServerResponse
} from "./OrdersUtils";
import {useGetDates, useGetOrders} from "../../QueryFactory";
import 'react-toastify/dist/ReactToastify.css';
import OrdersNewOrderContainer from "./components/OrdersNewOrderContainer";


export default function OrdersMainContainer() {

    const {year, month, day} = useParams();

    const [years, setYears] = useState();
    const [months, setMonths] = useState();
    const [days, setDays] = useState();


    const {
        data: dates,
        error: errorDates,
        isLoading: isLoadingDates,
        refetch: refetchDates
    } = useGetDates();

    const {
        data: orders,
        isLoading: isLoadingOrders,
        error: errorOrders,
        refetch: refetchOrders
    } = useGetOrders(year, month, day)

    const refresh = useCallback(() => {
        refetchDates().then();
        refetchOrders().then();
    }, []);

    const isDay = () => day;
    const isMonth = () => month && !day;
    const isYear = () => year && !month;

    useEffect(() => {
        if (dates && dates.status && dates.message) {
            setYears(getYearsListFromServerResponse(dates, year));
            setMonths(getMonthsListFromServerResponse(dates, year, month))
            setDays(getDaysListFromServerResponse(dates, year, month, day));
        }
    }, [dates, year, month, day]);


    function getSideListElements() {
        if (!dates) return;
        if (isYear()) return years;
        if (isMonth()) return months;
        if (isDay()) return days;
        return years;
    }

    function getMainListElements() {
        if (isYear()) return months;
        if (isMonth()) return days;
        if (isDay()) return null;
        return null;
    }


    return (
        <div className="orders__main-container">
            {errorDates ?
                <div>error occurred, please try again later</div>
                : isLoadingDates ? <Loader/> :
                    <>
                        <OrdersNewOrderContainer refresh={refresh}/>
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
                                <OrdersMainOrdersList
                                    refresh={refresh}
                                    orders={orders}
                                    isLoading={isLoadingOrders}
                                    error={errorOrders}/>
                                :
                                <OrdersMainDatesList
                                    data={getMainListElements()}
                                />}
                        </div>

                    </>
            }

        </div>
    )
}
