"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingWidget() {
  const DESIGNERS = "designers";
  const FOUNDATIONAL = "foundational";

  const currentPath = usePathname();
  const widgetRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState(FOUNDATIONAL);

  useEffect(() => {
    // Set the initial position to be right and center
    const updateInitialPosition = () => {
      const widgetWidth = widgetRef.current.offsetWidth;
      const widgetHeight = widgetRef.current.offsetHeight;
      const x = window.innerWidth - widgetWidth - 20; // 20px from the right edge
      const y = (window.innerHeight - widgetHeight) / 2; // Center vertically

      setPosition({ x, y });
      setIsVisible(true);
    };

    updateInitialPosition();
    window.addEventListener("resize", updateInitialPosition);

    return () => {
      window.removeEventListener("resize", updateInitialPosition);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - widgetRef.current.getBoundingClientRect().left,
      y: e.clientY - widgetRef.current.getBoundingClientRect().top,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav
      ref={widgetRef}
      onMouseDown={handleMouseDown}
      className={`absolute bg-white border border-gray-300 z-50 rounded-md ${
        isMinimized ? "sm:w-52 w-28 h-15" : "w-auto h-auto"
      }`}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        opacity: isVisible ? 0.8 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <div className="relative flex justify-between items-center p-2">
        <div className="text-lg font-bold">Menus</div>
        <button
          onClick={handleMinimize}
          className="bg-gray-200 hover:bg-gray-300 rounded-full"
          style={{
            width: "20px",
            height: "20px",
            lineHeight: "20px",
            textAlign: "center",
          }}
        >
          {isMinimized ? "+" : "-"}
        </button>
      </div>
      {!isMinimized && (
        <div>
          <div className="border-b border-t border-gray-300 sm:flex grid grid-cols-1">
            <button
              onClick={() => handleTabClick(FOUNDATIONAL)}
              className={`p-2 w-full ${
                activeTab === FOUNDATIONAL ? "bg-gray-200" : ""
              }`}
            >
              Foundational
            </button>
            <button
              onClick={() => handleTabClick(DESIGNERS)}
              className={`p-2 w-full ${
                activeTab === DESIGNERS ? "bg-gray-200" : ""
              }`}
            >
              Designers
            </button>
          </div>
          <div className="p-4">
            {activeTab === FOUNDATIONAL && (
              <ul className="list-none">
                <li>
                  <Link
                    href="/"
                    className={`${
                      currentPath === "/" ? "font-bold" : ""
                    } text-blue-500 hover:underline`}
                  >
                    Sally Hart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/foundational/sword"
                    className={`${
                      currentPath === "/foundational/sword" ? "font-bold" : ""
                    } text-blue-500 hover:underline`}
                  >
                    Sword
                  </Link>
                </li>
                <li>
                  <Link
                    href="/foundational/patio"
                    className={`${
                      currentPath === "/foundational/patio" ? "font-bold" : ""
                    } text-blue-500 hover:underline`}
                  >
                    Patio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/foundational/furneaux"
                    className={`${
                      currentPath === "/foundational/furneaux"
                        ? "font-bold"
                        : ""
                    } text-blue-500 hover:underline`}
                  >
                    Furneaux
                  </Link>
                </li>
                <li>
                  <Link
                    href="/foundational/boyce/grid"
                    className={`${
                      currentPath === "/foundational/boyce/grid" ||
                      currentPath === "/foundational/boyce/list"
                        ? "font-bold"
                        : ""
                    } text-blue-500 hover:underline`}
                  >
                    Boyce
                  </Link>
                </li>
              </ul>
            )}
            {activeTab === DESIGNERS && (
              <ul className="list-none">
                <li>
                  <Link
                    href="/"
                    className={`${
                      currentPath === "/" ? "font-bold" : ""
                    } hover:underline`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className={`${
                      currentPath === "/news" ? "font-bold" : ""
                    } hover:underline`}
                  >
                    News
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
