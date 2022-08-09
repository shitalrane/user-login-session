import Head from 'next/head'

import AdminCompoenet from '../Components/Admin'

export default function Admin() {
  return (
    <div className="container">
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <AdminCompoenet/>
      </main>

      
    </div>
  )
}
