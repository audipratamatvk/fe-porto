import BoyceFooter from "./BoyceFooter";
import BoyceNavBar from "./BoyceNavBar";

export default function BoyceLayout({ children }) {
  return (
    <div className="bg-black p-2 min-h-screen font-work-sans">
      <BoyceNavBar />
      <main className="text-white">{children}</main>
      <BoyceFooter />
    </div>
  );
}
