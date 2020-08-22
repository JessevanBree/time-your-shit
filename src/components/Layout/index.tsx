import Head from 'next/head'
import React, { ReactElement } from 'react'

const Layout = ({ children }: any): ReactElement => {
  return (
    <>
    <Head>
      <title>Time your shit</title>
    </Head>
      { children }
    </>
  )
}

export default Layout