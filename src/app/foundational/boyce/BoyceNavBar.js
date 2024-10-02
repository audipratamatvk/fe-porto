"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BoyceNavBar() {
  const currentPath = usePathname();

  return (
    <header className="flex justify-between items-center p-5 fixed w-11/12 z-50 text-base">
      <h1 className="w-16">
        <img src="/images/foundational/boyce/logo.svg" alt="Logo"></img>
      </h1>
      <nav className="text-white space-x-4">
        <Link
          href="/foundational/boyce/grid"
          className={`${
            currentPath === "/foundational/boyce/grid"
              ? "pb-1 border-b-2 border-white transiotion ease-in duration-300"
              : ""
          }`}
        >
          Grid
        </Link>
        <Link
          href="/foundational/boyce/list"
          className={`${
            currentPath === "/foundational/boyce/list"
              ? "pb-1 border-b-2 border-white transiotion ease-in duration-300"
              : ""
          }`}
        >
          List
        </Link>
      </nav>
    </header>
  );
}
