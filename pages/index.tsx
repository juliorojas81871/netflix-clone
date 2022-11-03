import type { NextPage } from "next";
import Head from "next/head";
import { Header, Banner } from "../components";

const Home: NextPage = () => {
  return (
    <div className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]`}>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/netflix-icon-logo.png" />
      </Head>
      <Header />
      <main>
        <Banner />
        <section>{/* Rows */}</section>
      </main>
      {/* modal */}
    </div>
  );
};

export default Home;
