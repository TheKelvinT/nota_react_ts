import { useState, useRef, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import { Drawer } from "antd"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import useLoadingStore from "@/store/loadingStore"
import NotaLogo from "@/assets/Nota-Logo.png"
import DarkLogo from "@/assets/nota-logo-black.png"
import DrawerDeco from "@/assets/bottles.png"
// import CustomButton from './Button'
const leftNavigation = [
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Events", href: "/event-space-klang-valley" },
  { name: "Membership", href: "/communal-nota-membership" },
]

const rightNavigation = [
  { name: "Careers", href: "/careers" },
  { name: "Reservations", href: "/reservations" },
  { name: "Blog", href: "/blog" },
]

const Navbar = () => {
  const loading = useLoadingStore((state: any) => state.loading)
  const location = useLocation()
  const { pathname } = location
  const [scrollDown, setScrollDown] = useState(false)
  const [open, setOpen] = useState(false)

  let menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mousedownHandler = (e: { target: any }) => {
      if (menuRef?.current && !menuRef?.current?.contains(e.target)) {
        setOpen(false)
      }
    }

    let scrollHandler = () => {
      setScrollDown(window.scrollY > 50)
    }

    document.addEventListener("mousedown", mousedownHandler)
    document.addEventListener("scroll", scrollHandler)

    return () => {
      document.removeEventListener("mousedown", mousedownHandler)
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  const isDarkNav =
    pathname.startsWith("/blog") ||
    pathname === "/reservations" ||
    pathname === "/admin" ||
    pathname === "/careers" ||
    pathname === "/communal-nota-membership" ||
    pathname === "/communal-nota-membership/terms" ||
    pathname === "/404"
  const bgColor =
    scrollDown || isDarkNav || loading
      ? "bg-secondary ease-out duration-300"
      : "bg-transparent ease-in duration-300"

  const handleClick = () => {
    setOpen(false)
  }
  return (
    <nav
      className={`relative z-50 text-white py-2  max-w-screen sticky top-0 overflow-hidden   ${bgColor}`}
    >
      {/* <div className="absolute right-0 mt-2.5 mr-16">
              <CustomButton title="BOOK A TABLE" path="/reservations"/>
            </div> */}
      <div className="bg-transparent">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="relative flex h-16 items-center justify-between ">
            <div className="flex flex-1 items-center justify-start lg:justify-center ">
              <div className="hidden lg:block">
                <div className="flex gap-x-5">
                  {leftNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="rounded-md px-3 py-2 text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <div className=" h-16 w-36 max-w-[144px] max-h-[64px] overflow-hidden ">
                    <img
                      src={NotaLogo}
                      alt="nota-logo"
                      className="object-cover"
                    />
                  </div>
                </Link>
              </div>

              <div className="hidden lg:block ">
                <div className="flex gap-x-5">
                  {rightNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-2 py-2 text-sm "
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="w-[135px]"></div>
                </div>
              </div>
            </div>

            <div className={`flex items-center lg:hidden ${bgColor}`}>
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
          onClose={handleClick}
          width={280}
          open={open}
          className="bg-primary mx-auto relative max-h-screen overflow-hidden overscroll-none"
        >
          <div className="sidenav-container flex flex-col  items-center overflow-hidden">
            <div>
              <div className="flex justify-end px-1">
                <button
                  className=" inline-flex items-center justify-center rounded-md  text-secondary"
                  onClick={() => setOpen(!open)}
                >
                  <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                </button>
              </div>
              <Link to="/">
                <div className="pb-6 max-h-[150px]  max-w-[252px] mx-auto ">
                  <img
                    src={DarkLogo}
                    alt=""
                    className="h-full w-full object-cover "
                  />
                </div>
              </Link>
              <div className="flex flex-col text-lg decoration-none text-secondary items-center gap-6 relative z-10">
                {/* Left Navigation */}
                {leftNavigation.map((item) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    onClick={handleClick}
                    className="text-secondary"
                  >
                    <div>{item.name}</div>
                  </Link>
                ))}
                {/* Right Navigation */}
                {rightNavigation.map((item) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    onClick={handleClick}
                    className="text-secondary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="overflow-hidden max-h-[280px] w-[280px] ">
              <img
                src={DrawerDeco}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  )
}

export default Navbar
