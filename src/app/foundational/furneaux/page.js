import Link from "next/link";

export default function Furneaux() {
  return (
    <>
      <header className="w-full bg-white px-4 sm:py-3 pt-3 pb-2 shadow-md sm:flex sm:justify-between sm:items-center top-0 left-0 text-[#48353a] z-50">
        <h1>
          <img
            className="align-bottom"
            src="/images/foundational/furneaux/logo.svg"
            alt="Furneaux Logo"
          />
        </h1>
        <nav>
          <ul className="flex space-x-4 font-bold font-david-libre text-base sm:text-lg mt-1 sm:mt-0">
            <li>
              <Link href="/about.html">ABOUT</Link>
            </li>
            <li>
              <Link href="/blog.html">BLOG</Link>
            </li>
            <li>
              <Link href="/contact.html">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="font-david-libre text-[#48353a]">
        <section
          className="pt-24 pb-20 sm:pt-48 sm:pb-48 bg-cover bg-center"
          style={{
            backgroundImage: `url("/images/foundational/furneaux/hero.jpg")`,
          }}
        >
          <div className="max-w-lg text-center mx-auto">
            <h2 className="sm:text-6xl text-3xl font-bold mb-5 leading-none max-w-[500px] mx-auto">
              The finest flowers at your fingertips
            </h2>
            <p className="max-w-[400px] mx-auto text-sm sm:text-base">
              Get London’s best seasonal bouquets, made lovingly by our
              hand-selected independent florists.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-3">
          <img src="/images/foundational/furneaux/flower_1.jpg"></img>
          <img src="/images/foundational/furneaux/flower_2.jpg"></img>
          <img src="/images/foundational/furneaux/flower_3.jpg"></img>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 text-center">
          <div className="bg-[#f7f1ee] px-5 pt-11 pb-10">
            <img
              className="rounded-full mx-auto w-[75px]"
              src="/images/foundational/furneaux/quote_liv.png"
            ></img>
            <blockquote className="font-bold text-xl mt-4 mb-1">
              “I order all my flowers from here. It’s the best service in town!”
            </blockquote>
            <p>Liv, designer in Highgate</p>
          </div>

          <div className="px-5 pt-11 pb-10">
            <img
              className="rounded-full mx-auto w-[75px]"
              src="/images/foundational/furneaux/quote_chelsea.png"
            ></img>
            <blockquote className="font-bold text-xl mt-4 mb-1">
              “Seriously. They deliver incredible flowers every time I order.”
            </blockquote>
            <p>Chelsea, artist in Shoreditch</p>
          </div>
        </section>
        <section
          className="bg-cover bg-center h-[500px]"
          style={{
            backgroundImage: `url("/images/foundational/furneaux/full-bleed.jpg")`,
          }}
        ></section>
        <section className="bg-cover bg-center bg-[#eeae9f] pt-6 pb-8 text-center">
          <p className="text-white mb-3">As seen in...</p>
          <div className="sm:flex sm:justify-center sm:gap-10 justify-items-center">
            <img
              className="mx-auto sm:mx-0 mb-8 sm:mb-0"
              src="/images/foundational/furneaux/buzzfeed.svg"
            ></img>
            <img
              className="mx-auto sm:mx-0 mb-8 sm:mb-0"
              src="/images/foundational/furneaux/forbes.svg"
            ></img>
            <img
              className="mx-auto sm:mx-0 mb-8 sm:mb-0"
              src="/images/foundational/furneaux/bbc.svg"
            ></img>
            <img
              className="mx-auto sm:mx-0 mb-8 sm:mb-0"
              src="/images/foundational/furneaux/guardian.svg"
            ></img>
          </div>
        </section>
      </main>
      <footer className="bg-[#48353a] flex justify-between px-7 py-6">
        <img src="/images/foundational/furneaux/logo-footer.svg"></img>
        <p className="text-[#ccc9ca] font-david-libre font-bold text-sm">
          Copyright © 2024
        </p>
      </footer>
    </>
  );
}
