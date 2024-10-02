import Link from "next/link";

export default function Patio() {
  const links = [
    { label: "Street Food", href: "#" },
    { label: "The Space", href: "#" },
    { label: "Cafe", href: "#" },
    { label: "Blog", href: "#" },
  ];

  return (
    <div
      style={{
        backgroundImage: `url("/images/foundational/patio/background.svg")`,
      }}
      className="pt-5"
    >
      <div className="max-w-screen-sm mx-auto bg-white">
        <header className="p-10">
          <h1>
            <img src="/images/foundational/patio/logo.svg" />
          </h1>
        </header>

        <nav className="bg-[#f05d5d] py-5 px-10 font-lora">
          <ul className="flex">
            {links.map((link) => (
              <li>
                <Link
                  key={link.label}
                  href={link.href}
                  className="mr-4 text-white hover:text-[#5000ff] hover:border-b-2 border-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="bg-[#5000ff] text-white font-lora">
          <section className="p-10 text-3xl leading-tight">
            A rotational pop-up restaurant and café serving up the freshest,
            tastiest street food from different chefs every two weeks
          </section>

          <section>
            <img src="/images/foundational/patio/store.jpg"></img>
          </section>

          <section className="p-10">
            <p className="text-md mt-5">
              Amongst the office blocks between stylish Shoreditch and the
              bustle of the city find our lush spot of paradise perched at the
              edge of Finsbury Square’s popular bowls green. It’s the end of our
              official first day of trading and while it’s still a week away
              until we have our first street food chefs in occupation, we’ve had
              a ball of a day serving up coffees,&nbsp;ice creams and soft
              drinks to our new (and hopefully returning) customers.
            </p>
            <blockquote className="mt-10 mb-10 text-2xl italic leading-tight tracking-wider">
              “I’d like to be a part of something with a bit of soul. I really
              want to know about the people I’m serving, what makes them tick.”
            </blockquote>

            <p className="text-md">
              We’ll be open this week Monday to Friday&nbsp;from 8am to 6pm so
              pop in to&nbsp;say hello and to&nbsp;enjoy an expert barista
              coffee or real fruit&nbsp;ice&nbsp;lolly&nbsp;on Finsbury Square’s
              Patio.
            </p>
          </section>

          <section>
            <img src="/images/foundational/patio/coffee.jpg"></img>
          </section>

          <section className="p-10">
            <img
              className="mx-auto"
              src="/images/foundational/patio/map.svg"
            ></img>
            <p className="mt-5 tracking-tight">
              We are five minutes walk from Old St and Moorgate stations and a
              ten minute walk away from Shoreditch High Street and Liverpool
              Street stations.
            </p>
            <p className="mt-5">
              Call us on{" "}
              <a
                className="border-b-2 border-[#f05d5d]"
                href="tel:4407549520689 no-underline"
              >
                +44 07549 520 689
              </a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
