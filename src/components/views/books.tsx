import Carousel from "../ui/carousel";

const Books = () => {
  const items = [
    {
      image: "/books/book-1.png",
      title: "#1 The man who solved the market",
      description: ``,
      otherUrl:
        "https://www.amazon.com.br/Man-Who-Solved-Market-Revolution/dp/0241309727",
    },
    {
      image: "/books/book-2.png",
      title: "#2 The (Mis)Behavior Of Markets",
      description: ``,
      otherUrl:
        "https://www.amazon.com.br/MIS-Behavior-Markets-Fractal-Reward/dp/0465043577/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2Z327H7IGO7JO&dib=eyJ2IjoiMSJ9.sxBt5PrwG8dHAPPmmDEd8bSeFi3ZfZabLOlHVG97-mQUQoZTVmrz3wHQqTKlCkqgJU8PFcMwGCS9Q_6iI5SVUCLCcLzbP_J1JPtsp_wlC2LnswoyqSbpC1tdLLXEbzAfottS3g6EbZTAq4NjJnvQ6vhJizRAcWegSKIrI6kBa-uaaq49D9j8YxoY4LCdSoo_adMEu6LGVHD4bj0EKX8RhGJWeEya6O4big9LbdvfiC0.gXMEJTd3FSSxo8eo7c_tGEAvYKd-prPOv5AiNAiuMjs&dib_tag=se&keywords=The+%28Mis%29Behavior+Of+Markets&qid=1724335413&s=books&sprefix=the+mis+behavior+of+markets%2Cstripbooks%2C179&sr=1-1&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e",
    },
    {
      image: "/books/book-3.png",
      title: "#3 Technical analysis of the financial markets",
      description: "",
      otherUrl:
        "https://www.amazon.com.br/Technical-Analysis-Financial-Markets-Comprehensive-ebook/dp/B00BWVKM4U/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3K3700CLIYQAP&dib=eyJ2IjoiMSJ9.pWOVvWSeItUb3wyaEPAtyPecWtiNJCuZ_s6CzfQDsDuBH2qHdfbMZRqevHuZeJtPVQQR_wxL6eDPtvoad_8RxezJFgwQ3B7qMzN47TPlUnajVrHf5oWb-Su0_WwQdb8zT5bpB3GTWw0NTypWIsaU20g0PQkeVC8IyRjEnL6MWQPXdLc9Pso33Uiu5F25R8HHShYR5sh_jlQk8Xw3SQAXpf13vRp4OPim4fzZGmoE0A8.BumIZKS37ilFDegSFjqZnC87LiPrR_fZIj8ZdmrhoVg&dib_tag=se&keywords=Technical+analysis+of+the+financial+markets&qid=1724335444&s=books&sprefix=technical+analysis+of+the+financial+markets%2Cstripbooks%2C189&sr=1-1",
    },
    {
      image: "/books/book-4.png",
      title: "#4 when genius failed",
      description: "",
      otherUrl:
        "https://www.amazon.com.br/When-Genius-Failed-Long-Term-Management/dp/0375758259/ref=pd_lpo_sccl_1/133-1887498-9699111?pd_rd_w=dUkYB&content-id=amzn1.sym.a2197dac-0fbe-4cc8-beca-b52f96ea33d5&pf_rd_p=a2197dac-0fbe-4cc8-beca-b52f96ea33d5&pf_rd_r=2DKR6AYG1ZE0WZ8VP0HC&pd_rd_wg=0p506&pd_rd_r=66fdb3f0-4afa-48d9-835e-4944cef14e3f&pd_rd_i=0375758259&psc=1",
    },
    {
      image: "/books/book-5.png",
      title: "#5 A man for all Markets",
      description: "",
      otherUrl:
        "https://www.amazon.com.br/Man-All-Markets-Street-English-ebook/dp/B00SEFEYCI/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=HX9P7E47M2E4&dib=eyJ2IjoiMSJ9.ZJTrxm0UiVnctcPH836nxK7Bx5QT12ky5eEUVxSzdDbKCy3yYJVs2HS06tbvLkxyFuuidfTJQZxHYVlHxRiVyTkdySavcrK28lGz13roi_JUQ6OHqLdHXlej06XrcX2MqNt2V5UrYx-5KxEOX_kkknG-ZqgwJOFnrjNqe6abVuqMbpzY08thHVt91pnB8LKfppzuFIfurGYcY5FygappN6JPFFfSMM_4Om7odctRkdw.-YK1JHvpyHeD-kq3jq8Oeo25y8he-AKAcK6vebbW9Ec&dib_tag=se&keywords=A+man+for+all+Markets&qid=1724335471&s=books&sprefix=a+man+for+all+markets%2Cstripbooks%2C187&sr=1-1",
    },
    {
      image: "/books/book-6.png",
      title: "#6 Fortune's Formula",
      description: "",
      otherUrl:
        "https://www.amazon.com.br/Fortunes-Formula-Scientific-Betting-Casinos-ebook/dp/B000SBTWNC/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3INO15FBGBFPA&dib=eyJ2IjoiMSJ9.s0kHEGyf6QhOA2rjZO4zEpDHVocXoDPM2-1cXx3bXxdqPYpEFl-neXV53bM6iffoq5ROmuzooN0NtjfX1AUpl12jzgS3bkqXyRRR1TQjMlqRkiuVSNEhL9OquvXUxYFBHJtcWF3w-EOlcYcCn1wJe5r1nOAWKJIDuQSHjA8alyiFLVGpAdI83zLyCIHeyi4a_SGLIztF5Ibullp-4glUnNniJv8WPeMObepdUzYMLpEKQSJyz2kzwriuDsJgmvVxfJGaUPJdjIiKCK8NYJEI8-WTW_XD4jfu8DmxJ6i3Jec.9W53HpzDojK6LoKcUOdjNY-GCnX65mfw3yEWj-hQTA0&dib_tag=se&keywords=fortune+formula&qid=1724342985&sprefix=fortune+formul%2Caps%2C201&sr=8-1",
    },
    {
      image: "/books/book-7.png",
      title: "#7 Option Volatility and Pricing",
      description: "",
      otherUrl:
        "https://www.amazon.com.br/Option-Volatility-Pricing-Strategies-Techniques/dp/0071818774/ref=sr_1_1?crid=20J7UYDQB0VAK&dib=eyJ2IjoiMSJ9.kRWtdJmT_nc9J7DuJpda9d7e3OvIpR24mtdeWK6b3irj-03IAXcFaNJ7i0ZYTSB4yevA5c6jdDqs7GtysL5KkHNYsFV0bwN71BgcofL7bv9S8gEwA6kBCaY_81zzO5R7WTQ9ev1RO-HcEqdkIRRIvzEBKbO9wip2BfO2hNkgGobsN47KnShH7E6Gcw8z4PafgFKpb1Q5tDCedsyPEL1EJr_GX8iZ_Q83l372Jpuxl928wSbZn7DPK6bAzlxQ-K6Wn78oY_tN-SmA83aynebdX2ozElfqw-TgB9wnHa3ANpY.9QjOWJDAwG8cBOmcm9qX1vgmZ0Qku9pTruNIWncd_us&dib_tag=se&keywords=option+volatility+and+pricing&qid=1724342960&sprefix=option%2C+vola%2Caps%2C198&sr=8-1&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147",
    },
  ];

  return (
    <section
      className="flex bg-[#ffc501] h-full py-12  flex-col items-center justify-center mx-auto"
      id="books"
    >
      <h2 className="lg:mb-10 capitalize text-3xl text-center font-bold text-[#000] sm:text-[40px]/[48px]">
        Books
      </h2>
      <Carousel items={items} />
    </section>
  );
};

export default Books;
