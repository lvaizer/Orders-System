import {useQuery} from 'react-query';

export const useGetDates = () => useQuery('dates', () => fetch('http://localhost:3002/orders/dates').then(res => res.json()));

export const useGetOrders = (year, month, day) => useQuery(['orders', year, month, day], () => fetch('http://localhost:3002/orders/' + year + '/' + month + '/' + day).then(res => res.json()));
