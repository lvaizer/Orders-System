import {Link} from "react-router-dom";

export default function OrdersPathHeader(props) {
    const {year, month, monthName, day, dayName, orderId: orderId} = props;

    const isOrder = () => orderId;
    const isDay = () => day && !orderId;
    const isMonth = () => month && !day;
    const isYear = () => year && !month;

    const getYearLink = () =>
        <Link to={`./${year}`}>{year}</Link>;
    const getMonthLink = () =>
        <>  {getYearLink()} &#8594; <Link to={`./${year}/${month}`}>{monthName}</Link></>;
    const getDayLink = () =>
        <>{getMonthLink()} &#8594; <Link
            to={`./${year}/${month}/${day}`}>{day} - {dayName}</Link></>;
    const getOrderLink = () =>
        <>{getDayLink()} &#8594; <Link
            to={`./${year}/${month}/${day}/${orderId}`}>{orderId}</Link></>;

    return (
        <div className="orders__list-header">
            {
                isYear() ? getYearLink() :
                    isMonth() ? getMonthLink() :
                        isDay() ? getDayLink() :
                            isOrder() ? getOrderLink() : ''
            }
        </div>
    )
}
