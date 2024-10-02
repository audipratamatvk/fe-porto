export default function Sword() {
  return (
    <>
      <main>
        <section
          className="w-full h-dvh bg-contain bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url("/images/foundational/sword/the-pen.svg")`,
          }}
        ></section>
        <section
          className="w-full h-dvh bg-contain bg-center bg-no-repeat bg-fixed bg-black"
          style={{
            backgroundImage: `url("/images/foundational/sword/is-mightier.svg")`,
          }}
        ></section>
        <section
          className="w-full h-dvh bg-contain bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url("/images/foundational/sword/than.svg")`,
          }}
        ></section>
        <section
          className="w-full h-dvh bg-contain bg-center bg-no-repeat bg-fixed bg-black"
          style={{
            backgroundImage: `url("/images/foundational/sword/the-sword.svg")`,
          }}
        ></section>

        <section
          className="w-full h-dvh bg-contain bg-center bg-no-repeat bg-fixed bg-[#00f10a]"
          style={{
            backgroundImage: `url("/images/foundational/sword/end.svg")`,
          }}
        ></section>

        <footer className="fixed bottom-11 w-12 left-1/2">
          <a href="https://en.wikipedia.org/wiki/The_pen_is_mightier_than_the_sword">
            <img src="/images/foundational/sword/info.svg"></img>
          </a>
        </footer>
      </main>

      <footer></footer>
    </>
  );
}
