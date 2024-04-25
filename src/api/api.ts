import axios, { AxiosInstance } from 'axios';

const API_KEY = 'd470535b109ace40c8c273f3'; 

const instance: AxiosInstance = axios.create({
  baseURL: 'https://v6.exchangerate-api.com/v6/' + API_KEY  
});

interface ExchangeRateResponse {
  conversion_rate: number;
}

interface CurrencyResponse {
  base_code: string;
  conversion_rates: Record<string, number>;
}

export const getExchangeRate = async (
  baseCurrency: string,
  targetCurrency: string
): Promise<number> => {
  try {
    const response = await instance.get<ExchangeRateResponse>(
      `/pair/${baseCurrency}/${targetCurrency}`
    );
    return response.data.conversion_rate;
  } catch (error) {
    throw new Error('Erro ao obter a taxa de câmbio');
  }
};

export const getAllCurrencies = async (): Promise<CurrencyResponse> => {
  try {
    const response = await instance.get<CurrencyResponse>('/latest/USD');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter as moedas suportadas');
  }
};
