import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'site-settings/site-theme/default';
import { AppProvider } from 'contexts/app/app.provider';
import { AuthProvider } from 'contexts/auth/auth.provider';
import { LanguageProvider } from 'contexts/language/language.provider';
import { useMedia } from 'utils/use-media';
import AppLayout from 'layouts/app-layout';
import { ToastContainer } from 'react-toastify';

// External CSS import here
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import 'components/multi-carousel/multi-carousel.style.css';
import 'react-spring-modal/dist/index.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'components/scrollbar/scrollbar.css';
import '@redq/reuse-modal/lib/index.css';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from 'assets/styles/global.style';

// Language translation messages
import { messages } from 'site-settings/site-translation/messages';
import 'typeface-lato';
import 'typeface-poppins';
// need to provide types
export default function ExtendedApp({ Component, pageProps }) {
  const mobile = useMedia('(max-width: 580px)');
  const tablet = useMedia('(max-width: 991px)');
  const desktop = useMedia('(min-width: 992px)');
  return (
    <ThemeProvider theme={defaultTheme}>
      <LanguageProvider messages={messages}>
        <AppProvider>
          <AuthProvider>
            <AppLayout>
              <Component
                {...pageProps}
                deviceType={{ mobile, tablet, desktop }}
              />
            </AppLayout>
            <GlobalStyle />
          </AuthProvider>
          <ToastContainer position="top-left" autoClose={3000} hideProgressBar={true} closeOnClick />
        </AppProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
