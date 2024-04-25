import { COLORS  } from "../../constants/colors/colors";
import theme from "../../styles/theme";




export const styles = {

  
  container: {
    padding: "20px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",  
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  titleContainer: {
    fontSize: "2em",
    color: COLORS.primaryBlue,
    borderBottom: "1px solid",
    borderColor: COLORS.lowOpaqueGrey,
    paddingBottom: "20px",
    display: "flex",
    aliignItems: "center",
    justifyContent: "center",
    width: "80%",

 [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  
  },

  formContainer: {
    marginTop: "70px",
    border: "1px solid",
    borderColor: COLORS.lowOpaqueGrey,
    borderRadius: "5px",
    width: "65%",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }

  ,
  home__circle :{
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: COLORS.lowPlusOpaqueGrey,
   border: "1px solid",
    borderColor: COLORS.lowOpaqueGrey,
    padding: "10px",
  },
  formContainerHeader: {
    borderBottom: "1px solid",
    borderColor: COLORS.lowOpaqueGrey,
    display: "flex",
    gap: "15px",
    padding: "10px",
    width: "100%",   

  },
  titleFormContainer: {
    fontSize: '1.5em',
    backgroundColor: COLORS.opaqueBlue,
    padding: "15px",
    borderRadius: "5px",  
    paddingBottom: "20px",
    border: "1px solid",
    borderColor: COLORS.secondaryBlue,
  }, 
  formContainerRender: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    width: "100%",   
    padding: "35px",
    marginBottom: "10em",
    


    "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
      padding: "10px",
      [theme.breakpoints.down("sm")]: {
        padding: "3px",
      }, 
  },
    "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
      fontSize: "3em",
      color: COLORS.primaryBlue,
      [theme.breakpoints.down("md")]: {
        fontSize: "2em",
      }, 
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5em",
      }, 
  },
    "& .css-1mf6u8l-MuiSvgIcon-root-MuiSelect-icon": {
      fontSize: "3em",
      color: COLORS.primaryBlue,
  },
 
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
 
  


  }
}