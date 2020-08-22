import Head from 'next/head'
import React, { ReactElement } from 'react'
import Navbar from '@components/Navbar'

const Layout = ({ children }: any): ReactElement => {
  return (
    <>
    <Head>
      <title>Time your shit</title>
    </Head>
    <Navbar/>
    { children }
    </>
  )
}

export default Layout