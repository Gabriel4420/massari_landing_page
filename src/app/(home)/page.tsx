import Hero from "@/components/hero";
import Header from "../../components/header";
import Head from "next/head";
import OurServices from "@/components/ourServices";
import About1 from "@/components/aboutUs";
import SignalsPanel from "@/components/signalsPanel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Massari Systems</title>
        <meta
          name="description"
          content="Financial solutions for your business"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen ">
        <Hero />
        {/* Adicionar outros componentes conforme necessário */}
        <OurServices />
        <About1 />
        <SignalsPanel />
      </main>
    </>
  );
}
