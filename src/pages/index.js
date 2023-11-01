import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Created with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World!!</h1>
    </div>
  )
}
