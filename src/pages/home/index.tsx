import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Form from "../../components/Form";
import { LABELS as lb } from "../../constants/texts/labels";
import { styles } from "./styles";
import { getAllCurrencies, getExchangeRate } from "../../api/api";

interface Currency {
  value: string;
  label: string;
}

const Home: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string | undefined>();
  const [toCurrency, setToCurrency] = useState<string | undefined>();
  const [exchangeRate, setExchangeRate] = useState<number | undefined>();
  const [amount, setAmount] = useState<number>();
  const [amountInFromCurrency, setAmountInFromCurrency] =
    useState<boolean>(true);

  let toAmount: number | undefined, fromAmount: number | undefined;
  if (exchangeRate && amount !== undefined) {
    if (amountInFromCurrency) {
      fromAmount = amount;
      toAmount = amount * exchangeRate;
    } else {
      toAmount = amount;
      fromAmount = amount / exchangeRate;
    }
  }

  const handleFromAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setAmountInFromCurrency(false);
  };

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const currencyResponse = await getAllCurrencies();
        const currencyList = Object.keys(currencyResponse.conversion_rates);
        setCurrencies(
          currencyList.map((currency) => ({
            value: currency,
            label: currency,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      const fetchExchangeRate = async () => {
        try {
          const exchangeRateResponse = await getExchangeRate(
            fromCurrency,
            toCurrency
          );
          setExchangeRate(exchangeRateResponse);
        } catch (error) {
          console.error(error);
        }
      };
      fetchExchangeRate();
    }
  }, [fromCurrency, toCurrency]);

  const renderCircles = () => {
    const circles = Array.from({ length: 3 }, (_, index) => (
      <Grid key={index} sx={styles.home__circle} />
    ));

    return <>{circles}</>;
  };

  return (
    <Grid sx={styles.container}>
      <Grid sx={styles.titleContainer}>{lb.TITLE}</Grid>

      <Grid sx={styles.formContainer}>
        <Grid sx={styles.formContainerHeader}>{renderCircles()}</Grid>
        <Grid sx={styles.formContainerRender}>
          <Grid sx={styles.titleFormContainer}>{lb.FORM_TITLE}</Grid>

          <Form
            currenciesList={currencies}
            amount={fromAmount}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e: ChangeEvent<{ value: unknown }>) =>
              setFromCurrency(e.target.value as string)
            }
            onChangeAmount={handleFromAmountChange}
          />
          <Form
            currenciesList={currencies}
            amount={toAmount}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e: ChangeEvent<{ value: unknown }>) =>
              setToCurrency(e.target.value as string)
            }
            onChangeAmount={handleToAmountChange}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
