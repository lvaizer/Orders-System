import {useQuery} from 'react-query';

const BASE_URL = window.location.hostname === "localhost" ? 'http://localhost:3002' : 'https://orders-server-6lz7.onrender.com'

export const useGetDates = () => useQuery('dates', () => fetch(BASE_URL + '/orders/dates').then(res => res.json()));

export const useGetOrders = (year, month, day) => useQuery(['orders', year, month, day], () => fetch(BASE_URL + '/orders/' + year + '/' + month + '/' + day).then(res => res.json()));
