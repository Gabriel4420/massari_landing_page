import Hero from "@/components/ui/hero";
import Header from "../../components/ui/header";
import Head from "next/head";
import OurServices from "@/components/views/ourServices";
import TheMarket from "@/components/views/theMarket";
import SignalsPanel from "@/components/views/signalsPanel";
import { Books } from "@/components/views/books";
import Strategy from "@/components/views/strategy";
import AccordionJobOpportunities from "@/components/views/accordionJobOpportunities";
import ContactUs from "@/components/views/contactUs";

export default function Home() {
  const jobOpportunities = [
    {
      title: 'Internship Data Scientist',
      description: 'We are looking for a passionate data scientist to join our team. Experience with r language is a plus.',
      link: '/jobs/data-scientist'
    },
    {
      title: 'Signal Research ',
      description: 'Join our Research team to improve our models. Knowledge of Node.js is required.',
      link: '/jobs/backend-developer'
    },
    {
      title: 'Infrastructure Developer',
      description: 'We need a Infrastructure Developer to help us build better environments.',
      link: '/jobs/Infrastructure Developer'
    },
    {
      title: 'Statistician',
      description: 'We need a statistican to help us.',
      link: '/jobs/Infrastructure Developer'
    }
  ];

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
      <main className="min-h-screen bg-white ">
        <Hero />
        {/* Adicionar outros componentes conforme necessário */}
        <OurServices />

        <SignalsPanel />
        <Strategy />
        <TheMarket />
        <Books />
        <AccordionJobOpportunities opportunities={jobOpportunities} />
        <ContactUs />
        
      </main>
    </>
  );
}
