import { Grid } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { getAllCurrencies, getExchangeRate } from "../../api/api";
import CustomInputs from "../../components/Form";
import { LABELS as lb } from "../../constants/texts/labels";
import { styles } from "./styles";

interface Currency {
  value: string;
  label: string;
}

const Home: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string | undefined>();
  const [toCurrency, setToCurrency] = useState<string | undefined>();
  const [exchangeRate, setExchangeRate] = useState<number | undefined>();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [amount, setAmount] = useState<number | undefined>();
  const [amountInFromCurrency, setAmountInFromCurrency] =
    useState<boolean>(true);

  let convertedToAmount: number | undefined,
    convertedFromAmount: number | undefined;
  if (exchangeRate && amount !== undefined) {
    if (amountInFromCurrency) {
      convertedFromAmount = amount;
      convertedToAmount = amount * exchangeRate;
    } else {
      convertedToAmount = amount;
      convertedFromAmount = amount / exchangeRate;
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

  useEffect(() => {
    setDisabled(!fromCurrency || !toCurrency);
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

          <CustomInputs
            currenciesList={currencies}
            amount={convertedFromAmount}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(value: string | undefined) =>
              setFromCurrency(value)
            }
            onChangeAmount={handleFromAmountChange}
            disabledInput={disabled}
          />
          <CustomInputs
            currenciesList={currencies}
            amount={convertedToAmount}
            selectedCurrency={toCurrency}
            onChangeCurrency={(value: string | undefined) =>
              setToCurrency(value)
            }
            onChangeAmount={handleToAmountChange}
            disabledInput={disabled}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
