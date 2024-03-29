import {useMutation, useQuery} from 'react-query';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

/*
* Orders queries
* */
export const useGetDates = () => useQuery('dates', () => axios(BASE_URL + '/orders/dates').then(res => res.data));

export const useGetOrders = (year, month, day) => useQuery(['orders', year, month, day], () => axios(BASE_URL + '/orders/' + year + '/' + month + '/' + day).then(res => res.data));

export const PostNewOrder = () => useMutation((data) => axios.post(BASE_URL + '/orders/new/order', data).then(res => res.data));
export const UpdateOrder = () => useMutation((data) => axios.post(BASE_URL + '/orders/update', data).then(res => res.data));
export const DeleteOrder = () => useMutation((data) => axios.post(BASE_URL + '/orders/delete', data).then(res => res.data));
