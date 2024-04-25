import { Grid, Input, MenuItem, Select } from "@mui/material";
import React from "react";
import { LABELS as lb } from "../../constants/texts/labels";
import { formatNumber } from "../../utils/formaters";
import { styles } from "./styles";

interface Currency {
  value: string;
  label: string;
}

interface FormProps {
  currenciesList: Currency[];
  amount: number | undefined;
  selectedCurrency: string | undefined;
  onChangeCurrency: (value: string | undefined) => void;
  onChangeAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabledInput?: boolean;
}

const Form: React.FC<FormProps> = ({
  currenciesList,
  amount,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  disabledInput,
}) => {
  const inputValue = amount !== undefined ? formatNumber(amount) : "";

  return (
    <Grid sx={styles.container}>
      <Grid sx={styles.inputContainer}>
        <Input
          disableUnderline
          value={inputValue}
          onChange={onChangeAmount}
          fullWidth
          placeholder={lb.COMPONENTS.INPUTS.LABEL}
          disabled={disabledInput}
        />
        <Grid sx={styles.form__lineDivider} />

        <Select
          id="select-currency"
          value={selectedCurrency || ""}
          onChange={(event) => onChangeCurrency(event.target.value as string)}
          fullWidth
          displayEmpty
          variant="standard"
          disableUnderline
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
                width: 200,
              },
            },
          }}
        >
          <MenuItem value="" disabled>
            {lb.COMPONENTS.INPUTS.LABEL}
          </MenuItem>
          {currenciesList?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};

export default Form;
