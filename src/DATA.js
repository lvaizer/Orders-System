export const ORDERS = [{
    date: '2023-01-22 18:26:47',
    id: 1,
    status: 'pending',
    firstName: 'liron',
    lastName: 'vaizer',
    phone: '0545544814',
    email: 'lvaizer@gmail.com',
    price: 530
}, {
    date: '2023-01-22 18:26:47',
    id: 2,
    status: 'approved',
    firstName: 'ofer',
    lastName: 'ogash',
    phone: '0545544814',
    email: 'lvaizer@gmail.com',
    price: 530
}, {
    date: '2023-02-22 18:26:47',
    id: 3,
    status: 'pending',
    firstName: 'liron',
    lastName: 'vaizer',
    phone: '0545544814',
    email: 'lvaizer@gmail.com',
    price: 530
}, {
    date: '2023-02-22 18:26:47',
    id: 4,
    status: 'approved',
    firstName: 'ofer',
    lastName: 'ogash',
    phone: '0545544814',
    email: 'lvaizer@gmail.com',
    price: 530
}, {
    date: '2023-04-22 18:26:47',
    id: 5,
    status: 'pending',
    firstName: 'liron',
    lastName: 'vaizer',
    phone: '0545544814',
    email: 'lvaizer@gmail.com',
    price: 530
}, {
    date: '2023-04-22 18:26:47',
    id: 7,
    status: 'pending',
    firstName: 'liron',
    lastName: 'vaizer',
    phone: '0545544814',
    email: 'lvaizer@gmail.com',
    price: 530
}, {
    date: '2023-04-22 18:26:47',
    id: 8,
    status: 'approved',
    firstName: 'ofer',
    lastName: 'ogash',
    phone: '0545544814',
    email: 'lvaizer@gmail.com',
    price: 530
}, {
    date: '2023-04-23 18:26:47',
    id: 9,
    status: 'pending',
    firstName: 'liron',
    lastName: 'vaizer',
    phone: '0545544814',
    email: 'lvaizer@gmail.com',
    price: 530
}, {
    date: '2023-05-22 18:26:47',
    id: 10,
    status: 'approved',
    firstName: 'ofer',
    lastName: 'ogash',
    phone: '0545544814',
    email: 'lvaizer@gmail.com',
    price: 530
}, {
    date: '2023-07-22 18:26:47',
    id: 6,
    status: 'approved',
    firstName: 'ofer',
    lastName: 'ogash',
    phone: '0545544814',
    email: 'lvaizer@gmail.com',
    price: 530
}
];
const MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getYears() {
    return [{
        id: 2023,
        title: 2023,
        link: './' + 2023
    }]
}

export function getMonthName(month) {
    if (!month) return;
    return MONTHS[month - 1];
}

export function getDayName(year, month, day) {
    if (!year || !month || !day) return;
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month - 1);
    date.setDate(day);
    return DAYS[date.getDay()];
}

export function getMonths(year) {
    const TEMP_MONTHS = [];
    const months = [];
    ORDERS.forEach(order => {
        const orderDate = new Date(order.date);
        if (orderDate.getFullYear() === Number(year)) {
            const orderMonth = String(orderDate.getMonth());
            if (!TEMP_MONTHS.includes(orderMonth)) {
                TEMP_MONTHS.push(orderMonth);
                months.push({
                    id: Number(orderMonth) + 1,
                    title: (orderDate.getMonth() + 1) + '/' + year + ' - ' + MONTHS[orderMonth],
                    link: './' + year + '/' + (orderDate.getMonth() + 1)
                })
            }
        }
    });
    return months
}

export function getDaysByMonth(year, month) {
    const TEMP_DAYS = [];
    const days = [];
    ORDERS.forEach(order => {
        const orderDate = new Date(order.date);
        if (orderDate.getFullYear() === Number(year) && (orderDate.getMonth() + 1) === Number(month)) {
            const orderDay = String(orderDate.getDate());
            if (!TEMP_DAYS.includes(orderDay)) {
                TEMP_DAYS.push(orderDay);
                days.push({
                    id: orderDay,
                    title: orderDate.getDate() + '/' + (orderDate.getMonth() + 1) + '/' + year + ' - ' + DAYS[orderDate.getDay()],
                    link: './' + year + '/' + month + '/' + orderDate.getDate()
                })
            }
        }
    });
    return days
}

export function getOrdersByDay(year, month, day) {
    const TEMP_ORDERS = [];
    const orders = [];
    const selectedDate = year + '' + (month - 1) + '' + day;
    ORDERS.forEach(order => {
        const orderDate = new Date(order.date);
        const compareDate = orderDate.getFullYear() + '' + orderDate.getMonth() + '' + orderDate.getDate()
        if (selectedDate === compareDate && !TEMP_ORDERS.includes(order.id)) {
            orders.push(order)
            TEMP_ORDERS.push(order.id)
        }
    })
    return orders;
}

