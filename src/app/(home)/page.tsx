"use client";
import Head from "next/head";

import { Hero, Header, Footer, CookieConsentToast } from "@/components/ui";
import {
  FractalLandingPage,
  Strategy,
  TheMarket,
  Books,
  OurServices,
  SignalsPanel,
  AccordionJobOpportunities,
  ContactUs,
} from "@/components/views";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const jobOpportunities = [
    {
      id: "1",
      title: "Internship Data Scientist",
      description:
        "We are looking for a passionate data scientist to join our team. Experience with r language is a plus.",
      link: "/jobs/data-scientist",
    },
    {
      id: "2",
      title: "Signal Research ",
      description:
        "Join our Research team to improve our models. Knowledge of Node.js is required.",
      link: "/jobs/backend-developer",
    },
    {
      id: "3",
      title: "Infrastructure Developer",
      description:
        "We need a Infrastructure Developer to help us build better environments.",
      link: "/jobs/Infrastructure Developer",
    },
    {
      id: "4",
      title: "Statistician",
      description: "We need a statistican to help us.",
      link: "/jobs/Infrastructure Developer",
    },
  ];

  return (
    <>
      <CookieConsentToast />
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
        <FractalLandingPage />
        <Books />
        <AccordionJobOpportunities opportunities={jobOpportunities} />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
