import { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Drawer } from "antd";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import useLoadingStore from "@/store/loadingStore";
import NotaLogo from "@/assets/Nota-Logo.png";
import DarkLogo from "@/assets/nota-logo-black.png"


const leftNavigation = [
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Events", href: "/events" },
  // { name: "Festive", href: "/festive" },
];

const rightNavigation = [
  { name: "Careers", href: "/careers" },
  { name: "Reservations", href: "/reservations" },
  { name: "Blog", href: "/blog" },
];
// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

const Navbar = () => {
  const loading = useLoadingStore((state: any) => state.loading);
  const location = useLocation();
  const { pathname } = location;
  const [scrollDown, setScrollDown] = useState(false);
  const [open, setOpen] = useState(false);

  let menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mousedownHandler = (e: { target: any }) => {
      if (menuRef?.current && !menuRef?.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    let scrollHandler = () => {
      setScrollDown(window.scrollY > 50);
    };

    document.addEventListener("mousedown", mousedownHandler);
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("mousedown", mousedownHandler);
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const isDarkNav =
    pathname === "/blog" ||
    pathname === "/reservations" ||
    pathname === "/admin" ||
    pathname === "/careers";
  const bgColor =
    scrollDown || isDarkNav || loading
      ? "bg-secondary ease-out duration-300"
      : "bg-transparent ease-in duration-300";

  return (
    <nav
      className={`relative z-50 text-white py-2  max-w-screen sticky top-0 overflow-hidden   ${bgColor}`}
    >
      <div className="bg-transparent">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-start md:justify-center ">
              <div className="hidden md:block">
                <div className="flex gap-x-5">
                  {leftNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="rounded-md px-3 py-2 text-sm"
                      // aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-shrink-0 items-center">
                <a href="/">
                  <div className=" h-16 w-36 max-w-[144px] max-h-[64px] overflow-hidden ">
                    <img
                      src={NotaLogo}
                      alt="nota-logo"
                      className="object-cover"
                    />
                  </div>
                </a>
              </div>

              <div className="hidden md:block ">
                <div className="flex gap-x-5">
                  {rightNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-2 py-2 text-sm "
                      // aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className={`flex items-center md:hidden ${bgColor}`}>
              {/* Mobile menu button*/}
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-white   "
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6 " aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        <Drawer
          closable={false}
          placement="right"
          width={300}
          open={open}
          className="bg-primary"
        >
          <div className="flex justify-end">
            <button
              className=" inline-flex items-center justify-center rounded-md  text-secondary"
              onClick={() => setOpen(!open)}
            >
              <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
            </button>
          </div>

          <div className="py-10">
            
        <Link to="/"><img src={DarkLogo} alt="" /></Link>
          </div>
          <div className="flex flex-col text-lg decoration-none text-secondary items-center gap-7 ">
            {/* Left Navigation */}
            {leftNavigation.map((item) => (
              <a href={item.href} key={item.name} className="text-secondary">
                <div>{item.name}</div>
              </a>
            ))}
            {/* Right Navigation */}
            {rightNavigation.map((item) => (
              <a href={item.href} key={item.name} className="text-secondary">
                {item.name}
              </a>
            ))}
          </div>
        </Drawer>
        {/* {open && (
        <div
          style={{ position: "fixed" }}
          className=" md:hidden absolute right-0 top-[70px] overflow-hidden"
          ref={menuRef}
        >
          <div className="space-y-4 pr-6 pl-12 py-6 flex flex-col text-sm bg-white/15 backdrop-blur-md w-screen xs:w-[160px] h-full">
            <div className="flex flex-col items-center xs:items-end gap-y-4">
              {leftNavigation.map((item) => (
                <motion.div
                  className="hover:font-bold"
                  key={item.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col items-center xs:items-end gap-y-4">
              {rightNavigation.map((item) => (
                <motion.div
                  key={item.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link href={item.href}>{item.name}</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )} */}
      </div>
    </nav>
  );
};

export default Navbar;
