import React from 'react'
import App, {AppInitialProps, AppContext} from 'next/app';
import { END } from 'redux-saga';

import Layout from '@components/Layout'
import GlobalTheme from '@style/global';

import { ReduxStore } from '@interfaces/store'
import wrapper from '../store'
import GlobalThemeProvider from '@style/theme';

class TimeYourShit extends App<AppInitialProps> {
  public static getInitialProps = async ({Component, ctx}: AppContext) => {
      const pageProps = { ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}) };

      if (ctx.req) {
          ctx.store.dispatch(END);
          await (ctx.store as ReduxStore).sagaTask!.toPromise();
      }

      return {
          pageProps,
      };
  };

  public render() {
      const {Component, pageProps} = this.props;
      return (
        <>
          <GlobalThemeProvider>
            <GlobalTheme />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </GlobalThemeProvider>
        </>
      )
  }
}

export default wrapper.withRedux(TimeYourShit)