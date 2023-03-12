import {Link} from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function OrdersPathHeader(props) {
    const {year, month, monthName, day, dayName} = props;

    const isDay = () => day;
    const isMonth = () => month && !day;
    const isYear = () => year && !month;

    const getYearLink = () =>
        <Link to={`/orders/${year}`}>{year}</Link>;
    const getMonthLink = () =>
        <>  {getYearLink()} <NavigateNextIcon fontSize="small"/> <Link
            to={`/orders/${year}/${month}`}>{monthName}</Link></>;
    const getDayLink = () =>
        <>{getMonthLink()} <NavigateNextIcon fontSize="small"/> <Link
            to={`/orders/${year}/${month}/${day}`}>{day} - {dayName}</Link></>;

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


        </div>
    )
}
