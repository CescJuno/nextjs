import "../styles/global.scss";
import { AppProps } from 'next/app';
//import { Provider as AuthProvider } from "next-auth/client";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "../plugins/i18n";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme/theme';
import createEmotionCache from '../theme/createEmotionCache';
//import Routes from "../routers";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
