import {useMutation, useQuery} from 'react-query';
import axios from 'axios';

const BASE_URL = window.location.hostname === "localhost" ? 'http://localhost:3002' : 'https://orders-server-6lz7.onrender.com'

/*
* Orders queries
* */
export const useGetDates = () => useQuery('dates', () => fetch(BASE_URL + '/orders/dates').then(res => res.json()));

export const useGetOrders = (year, month, day) => useQuery(['orders', year, month, day], () => fetch(BASE_URL + '/orders/' + year + '/' + month + '/' + day).then(res => res.json()));

export const PostNewOrder = () => useMutation((data) => axios.post(BASE_URL + '/orders/new/order', data).then(res => res.data));
export const UpdateOrder = () => useMutation((data) => axios.post(BASE_URL + '/orders/update', data).then(res => res.data));
export const DeleteOrder = () => useMutation((data) => axios.post(BASE_URL + '/orders/delete', data).then(res => res.data));
