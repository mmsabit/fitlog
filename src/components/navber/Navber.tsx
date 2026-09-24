import Logo from "@/assets/Logo.png"
import Image from "next/image";
import Link from "next/link";
import Navlinks from "./Navlinks";
import NavberPoints from "./NavberPoints";

const Navber = () => {

  return (
    <div className="border-b border-[#1c1f26]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#20222a] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Navlinks/>
            </ul>
          </div>
          <Link href={`/`}>
            <Image
            src={Logo}
            alt="Logo"
            width={110}
            height={30}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Navlinks/>
          </ul>
        </div>
        <div className="navbar-end">
          <NavberPoints/>
        </div>
      </div>
    </div>
  );
};

export default Navber;
