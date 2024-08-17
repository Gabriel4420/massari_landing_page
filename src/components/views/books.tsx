import Carousel from "../ui/carousel";

export const Books = () => {

  const items = [
    {
      image: "/books/book-1.png",
      title: "#1 The man who solved the market",
      description: ``,
    },
    {
      image: "/books/book-2.png",
      title: "#2 The (Mis)Behavior Of Markets",
      description: ``,
    },
    {
      image: "/books/book-3.png",
      title: "#3 Technical analysis of the financial markets",
      description: "",
    },
    {
      image: "/books/book-4.png",
      title: "#4 when genius failed",
      description: "",
    },
    {
      image: "/books/book-5.png",
      title: "#5 A man for all Markets",
      description: "",
    }
  ];

  return (
    <div className="flex bg-white h-full py-5  flex-col items-center justify-center mx-auto" id="books">
      <h2 className="mb-10 capitalize text-3xl text-center font-bold text-[#000] sm:text-[40px]/[48px]">
      Books
      </h2>
      <Carousel items={items} />
    </div>
  );
};
