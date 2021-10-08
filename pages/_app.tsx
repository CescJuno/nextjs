import "../styles/global.scss";
import { AppProps } from 'next/app';
//import { Provider as AuthProvider } from "next-auth/client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "../plugins/i18n";
//import Routes from "../routers";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  );
};

export default MyApp;
