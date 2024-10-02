export default function SallyHart() {
  const images = [
    "/images/foundational/sally-hart/sally_1.jpg",
    "/images/foundational/sally-hart/sally_2.jpg",
    "/images/foundational/sally-hart/sally_3.jpg",
    "/images/foundational/sally-hart/sally_4.jpg",
    "/images/foundational/sally-hart/sally_5.jpg",
    "/images/foundational/sally-hart/sally_6.jpg",
    "/images/foundational/sally-hart/sally_7.jpg",
    "/images/foundational/sally-hart/sally_8.jpg",
  ];

  const links = [
    { href: "mailto:contact@sallyhart.com", text: "Email" },
    { href: "http://twitter.com/sallyhart", text: "Twitter" },
    { href: "http://instagram.com/sallyhart", text: "Instagram" },
  ];

  return (
    <main>
      <header className="fixed top-5 left-5 text-white font-cooper-hewitt">
        <h1 className="text-2xl">Sally Hart</h1>
        <p>Photographer and Designer</p>
      </header>
      {images.map((image, index) => (
        <section
          key={index}
          className={`bg-cover h-screen w-full bg-fixed`}
          style={{ backgroundImage: `url(${image})` }}
          aria-label={`Background image ${index + 1}`}
        ></section>
      ))}
      <footer className="fixed left-5 bottom-5 text-white">
        {links.map((link, index) => (
          <a
            key={index}
            className="mr-2 font-cooper-hewitt text-lg hover:text-gray-200"
            href={link.href}
            aria-label={link.text}
          >
            {link.text}
          </a>
        ))}
      </footer>
    </main>
  );
}
