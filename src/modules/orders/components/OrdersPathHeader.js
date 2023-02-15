import {Link} from "react-router-dom";
import OrdersNewOrderContainer from "./OrdersNewOrderContainer";

export default function OrdersPathHeader(props) {
    const {year, month, monthName, day, dayName, refresh} = props;

    const isDay = () => day;
    const isMonth = () => month && !day;
    const isYear = () => year && !month;

    const getYearLink = () =>
        <Link to={`./${year}`}>{year}</Link>;
    const getMonthLink = () =>
        <>  {getYearLink()} &#8594; <Link to={`./${year}/${month}`}>{monthName}</Link></>;
    const getDayLink = () =>
        <>{getMonthLink()} &#8594; <Link
            to={`./${year}/${month}/${day}`}>{day} - {dayName}</Link></>;

    return (
        <div className="orders__path-container">
            <div className="orders__path">
                {
                    isYear() ? getYearLink() :
                        isMonth() ? getMonthLink() :
                            isDay() ? getDayLink() :
                                <Link to={'#'}>select year</Link>
                }
            </div>
            <OrdersNewOrderContainer refresh={refresh}/>

        </div>
    )
}
