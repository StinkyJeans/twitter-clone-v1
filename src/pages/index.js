import Head from 'next/head'
import Sidebar from '../../components/Sidebar'
import Feed from '../../components/Feed'
import Widgets from '../../components/Widgets'

export default function Home({newsResults}) {
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
        <Feed />

        {/* Widgets */}
        <Widgets newsResults={newsResults.articles}/>

        {/* Modal */}


      </main>



    </div>
  )
}


//https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

export async function getServerSideProps() {
  const newsResults = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/business/us.json').then((res)=>res.json());
  return {
    props:{
      newsResults,
    }
  }
}
