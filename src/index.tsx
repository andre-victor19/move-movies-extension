import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material";
import MoviesContext from "./context/Movies";
import App from "./pages/App/App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MoviesContext>
      <App />
    </MoviesContext>
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
