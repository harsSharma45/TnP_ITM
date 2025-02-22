import Head from "next/head"
import Header from "./Header"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>College TNP Cell</title>
        <meta name="description" content="Training and Placement Cell for College Students" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto mt-8 px-4">{children}</main>
    </>
  )
}

