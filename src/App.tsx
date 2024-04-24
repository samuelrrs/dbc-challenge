import Home from "./pages/home";
import "../src/styles/global.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
