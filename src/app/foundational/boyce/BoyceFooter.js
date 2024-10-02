export default function BoyceFooter() {
  return (
    <footer className="text-white p-5 flex justify-between items-center">
      <p>Created By Audi</p>
      <nav className="space-x-2 flex">
        <a href="https://www.instagram.com/audiprtm">
          <img
            className="w-4"
            src="/images/foundational/boyce/icon-instagram.svg"
          ></img>
        </a>
        <a href="https://www.twitter.com/audi_prtm">
          <img
            className="w-4"
            src="/images/foundational/boyce/icon-twitter.svg"
          ></img>
        </a>
      </nav>
    </footer>
  );
}
