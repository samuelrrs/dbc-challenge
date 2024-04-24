import { createTheme } from '@mui/material/styles';
import { COLORS } from '../constants/colors/colors';

// Define os breakpoints personalizados
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1280,
    xl: 1920,
  },
};

const theme = createTheme({
  breakpoints, 
  components: {
    MuiInput: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: COLORS.primaryBlack,
            opacity: 1,
            fontSize: "16px",
          },
        },
      },
    },
  },
});

export default theme;
