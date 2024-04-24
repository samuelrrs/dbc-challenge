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
  amount: number | undefined; // Alterado para aceitar undefined
  selectedCurrency: string | undefined;
  onChangeCurrency: (event: React.ChangeEvent<{ value: unknown }>) => void;
  onChangeAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = ({
  currenciesList,
  amount,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
}) => {
  const inputValue = amount !== undefined ? formatNumber(amount) : undefined; // Verifica se amount é undefined

  return (
    <Grid sx={styles.container}>
      <Grid sx={styles.inputContainer}>
        <Input
          disableUnderline
          value={inputValue !== undefined ? inputValue : ""}
          onChange={onChangeAmount}
          fullWidth
          placeholder={lb.COMPONENTS.INPUTS.LABEL}
        />
        <Grid sx={styles.form__lineDivider} />

        <Select
          id="select-currency"
          value={selectedCurrency || ""}
          onChange={onChangeCurrency}
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
