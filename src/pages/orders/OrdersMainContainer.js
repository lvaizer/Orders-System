import OrdersSideList from "./OrdersSideList";
import {useParams} from 'react-router-dom';
import {useGetDates} from "../../QueryFactory";
import {useEffect, useState} from "react";
import OrdersMainOrdersList from "./OrdersMainOrdersList";
import OrdersMainDatesList from "./OrdersMainDatesList";
import OrdersPathHeader from "./components/OrdersPathHeader";

const MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
            getYearsList();
            getMonthsList();
            getDaysList();
        }

    }, [data, year, month, day]);

    function getYearsList() {
        const TEMP_years = [];
        for (const i_year in data.message) {
            TEMP_years.push({title: i_year, link: './' + i_year, isCurrent: isCurrent(i_year)})
        }
        setYears(TEMP_years);
    }

    function getMonthsList() {
        const TEMP_months = [];
        for (const i_year in data.message) {
            if (Number(i_year) === Number(year)) {
                for (const i_month in data.message[i_year]) {
                    TEMP_months.push({
                        title: i_month + '/' + i_year + ' - ' + data.message[i_year][i_month].name,
                        link: './' + i_year + '/' + i_month,
                        isCurrent: isCurrent(i_month)
                    });
                }
            }
        }
        setMonths(TEMP_months);
    }

    function getDaysList() {
        const TEMP_days = [];
        for (const i_year in data.message) {
            if (Number(i_year) === Number(year)) {
                for (const i_month in data.message[i_year]) {
                    if (Number(i_month) === Number(month)) {
                        for (const i_day in data.message[i_year][i_month].days) {
                            TEMP_days.push({
                                title: i_day + '/' + i_month + '/' + i_year + ' - ' + data.message[i_year][i_month].days[i_day].name,
                                link: './' + i_year + '/' + i_month + '/' + i_day,
                                isCurrent: isCurrent(i_day)
                            });
                        }
                    }
                }
            }
        }
        setDays(TEMP_days);
    }

    function getMonthName(j_month) {
        if (!j_month) return;
        return MONTHS[j_month - 1];
    }

    function getDayName(j_year, j_month, j_day) {
        if (!j_year || !j_month || !day) return;
        const date = new Date();
        date.setFullYear(j_year);
        date.setMonth(j_month - 1);
        date.setDate(j_day);
        return DAYS[date.getDay()];
    }

    function isCurrent(id) {
        if (day) return Number(id) === Number(day);
        if (month) return Number(id) === Number(month);
        return year && Number(id) === Number(year);
    }

    function getMainListElements() {
        if (isYear()) return months;
        if (isMonth()) return days;
        if (isDay()) return [];
        return null;
    }

    return (
        <div className="orders__main-container">
            {
                error ? <div>error occurred, please try again later</div> :
                    isLoading ? <div>loading...</div> :
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
