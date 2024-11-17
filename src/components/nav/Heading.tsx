import { MyLinks } from "./components/MyLinks";
import { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldLine } from "react-icons/ri";

export const Heading = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [selected, setSelected] = useState("");
  const handleMobileViewOpen = () => {
    setOpenMobile(true);
  };
  const handleMobileViewClose = () => {
    setOpenMobile(false);
  };
  const toggleref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleref.current && !toggleref.current.contains(event.target as Node)) {
        setOpenMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleref]);

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-[calc(45px+3.6rem)] px-9 bg-opacity-25 backdrop-blur-md text-lg font-bold">
      <MyLinks />
      <div className="relative cursor-pointer transition duration-900 ease-in-out md:hidden">
        {openMobile ? (
          <AiOutlineClose className="text-white text-5xl" onClick={handleMobileViewClose} />
        ) : (
          <RiMenuUnfoldLine className="text-white text-5xl" onClick={handleMobileViewOpen} />
        )}
        <div
          className={`absolute top-12 p-5 w-60 bg-background-dark rounded-lg ${openMobile ? 'block' : 'hidden'}`}
          onClick={handleMobileViewClose}
          ref={toggleref}
        >
          <nav className="flex flex-col gap-5">
            <a
              href="/"
              onClick={() => {
                setSelected("");
              }}
              className="text-text font-bold text-md"
            >
              Home
            </a>
            <a
              href="/#about"
              onClick={() => {
                setSelected("about");
              }}
              className="text-text font-bold text-md"
            >
              About
            </a>
            <a
              href="/blog"
              onClick={() => {
                setSelected("blog");
              }}
              className="text-text font-bold text-md"
            >
              Blog
            </a>
            <a href="/#projects" onClick={() => setSelected("projects")} className="text-text font-bold text-md">Projects</a>
            <a href="/#starred-repos" onClick={() => setSelected("starred")} className="text-text font-bold text-md">Repos</a>
            <a
              href="/#contact"
              onClick={() => setSelected("contact")}
              className="text-text font-bold text-md"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};