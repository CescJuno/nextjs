import "../styles/global.scss";
//import { Provider as AuthProvider } from "next-auth/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "../store/reducers";
import progressMiddleware from "../middleware/progress";
import interceptor from "../middleware/interceptors";
import "../plugins/i18n";
//import Routes from "../routers";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false }).concat(progressMiddleware),
  devTools: process.env.NODE_ENV !== `production`,
});
interceptor(store);
const MyApp = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  );
};

export default MyApp;
