import axios, { AxiosResponse } from 'axios';

import { Product, Transaction } from '../Contracts';

import { getDataOptions } from './BackendService';

const getProductsUrl = '/products';
const getTransactionsUrl = '/transactions';

export const getProducts = async (): Promise<Product> => {
	try {
		const response: AxiosResponse<Product> = await axios(getDataOptions(getProductsUrl));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getTransactions = async (): Promise<Transaction> => {
	try {
		const response: AxiosResponse<Transaction> = await axios(getDataOptions(getTransactionsUrl));
		return response.data;
	} catch (error) {
		return Promise.reject(error);
	}
};