import { COLORS } from "../../constants/colors/colors";

export const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        width: "100%",
    },
    titleContainer: {
      fontSize: '1.5em',
      backgroundColor: COLORS.secondaryBlue,
      padding: "15px",
      borderRadius: "5px",
    },    
    inputContainer: {
    display: "flex",  
    border: "1px solid",
    borderColor: COLORS.lowOpaqueGrey, 
    borderRadius: "5px",
    padding: "5px",
    width: "100%",   
    alignItems: "center",

  },
  form__lineDivider: {
    borderLeft: "1px solid",
    borderColor: COLORS.lowOpaqueGrey,
    height: "30px",
    marginRight: "15px",
  }
}