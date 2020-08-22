import React from 'react'
import App, {AppInitialProps, AppContext} from 'next/app';
import { ReduxStore } from '@interfaces/store'
import wrapper from '../store'
import Layout from '@components/Layout'
import { END } from 'redux-saga';


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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )
  }
}

export default wrapper.withRedux(TimeYourShit)