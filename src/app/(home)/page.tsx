import Hero from "@/components/hero";
import Header from "../../components/header";
import Head from "next/head";
import OurServices from "@/components/ourServices";
import About1 from "@/components/aboutUs";
import SignalsPanel from "@/components/signalsPanel";
import { RegularFractalSlider } from "@/components/regularFractalSlider";
import Strategy from "@/components/strategy";

export default function Home() {
  return (
    <>
      <Head>
        <title>Massari Systems</title>
        <meta
          name="description"
          content="Financial solutions for your business"
        />
        <meta name="theme-color" content="#ffc501" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen ">
        <Hero />
        {/* Adicionar outros componentes conforme necessário */}
        <OurServices />

        <SignalsPanel />
        <About1 />
        <RegularFractalSlider />
        <Strategy />
      </main>
    </>
  );
}
