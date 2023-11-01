import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import Feed from '../../components/Feed'
import Widgets from '../../components/Widgets'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Created with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex min-h-screen mx-auto pt-1'>

        {/* Sidebar */}

        <Sidebar/>

        {/* Feed */}
        <Feed/>

        {/* Widgets */}
        <Widgets/>

        {/* Modal */}


      </main>



    </div>
  )
}
