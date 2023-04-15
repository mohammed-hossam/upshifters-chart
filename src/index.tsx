import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "components/Layout/Layout";
import theme from "styles/theme";
import App from "./App";
import { Provider } from "react-redux";
import store from "store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import RTL from "styles/createEmotionCache";
import "lib/i18n";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RTL>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Layout>
      </ThemeProvider>
    </RTL>
  </Provider>
);
