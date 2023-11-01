import Head from 'next/head'
import Sidebar from '../../components/Sidebar'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Created with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex min-h-screen max-w-7xl mx-auto '>

        {/* Sidebar */}

        <Sidebar/>

        {/* Feed */}



        {/* Widgets */}


        {/* Modal */}


      </main>



    </div>
  )
}