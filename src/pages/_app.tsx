import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import { AppProps, AppContext } from 'next/app'
import { ReduxStoreType } from '@interfaces/store'
import configureStore from '../store'
import Layout from '@components/Layout'

interface ApplicationProps extends AppProps {
  store: ReduxStoreType;
}

type AppComponent = (props: ApplicationProps) => ReactElement;

type InitialProps = {
  pageProps: any,
}

type AppFC = AppComponent & {
  getInitialProps(
    nextAppCtx: AppContext
  ): InitialProps | Promise<InitialProps>
};

const TimeYourShit: AppFC = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store as any}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

TimeYourShit.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
  return { pageProps }
}

export default withRedux(configureStore)(
  withReduxSaga(TimeYourShit)
)