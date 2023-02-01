import OrdersSideList from "./OrdersSideList";
import {useParams} from 'react-router-dom';
import OrdersPathHeader from "./components/OrdersPathHeader";
import OrdersMainList from "./OrdersMainList";
import {
    getDayName,
    getDaysByMonth,
    getMonthName,
    getMonths,
    getOrdersByDay,
    getYears
} from "../../DATA";

export default function OrdersMainContainer() {

    const {year, month, day, orderId} = useParams();

    const isDay = () => day;
    const isMonth = () => month && !day;
    const isYear = () => year && !month;

    function getSideListElements() {
        if (isYear()) return getYears();
        if (isMonth()) return getMonths(year);
        if (isDay()) return getDaysByMonth(year, month);
        return getYears();

    }

    function getMainListElements() {
        if (isYear()) return getMonths(year);
        if (isMonth()) return getDaysByMonth(year, month);
        if (isDay()) return getOrdersByDay(year, month, day);
        return null;
    }

    return (
        <div className="orders__main-container">
            <OrdersPathHeader
                year={year}
                month={month}
                monthName={getMonthName(month)}
                day={day}
                dayName={getDayName(year, month, day)}
            />
            <div className="orders__main-container__content">
                <OrdersSideList
                    orderId={orderId}
                    year={year}
                    month={month}
                    day={day}
                    data={getSideListElements()}/>
                <OrdersMainList data={getMainListElements()} isDay={isDay()}/>
            </div>
        </div>
    )
}
