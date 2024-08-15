import Logo from "../assets/prc-sblogo.png";
import Image from "next/image";

function Navbar2() {
  return (
    <nav
      style={{ height: "60px" }}
      className="flex flex-row items-center  p-2 pt-4 px-3 justify-between bg-white text-black mx-5"
    >
      <a href="#" className="flex-shrink-0 mr-4">
        <Image className="w-24 h-auto" src={Logo} alt="Logo" />
      </a>
      <ul className="flex flex-row space-x-4 items-center">
        <li>
          <a
            href="#"
            className="text-sm md:text-base hover:text-yellow-500 transition-colors"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm md:text-base hover:text-yellow-500 transition-colors"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm md:text-base hover:text-yellow-500 transition-colors"
          >
            SOCIETIES
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm md:text-base hover:text-yellow-500 transition-colors"
          >
            EVENTS
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm md:text-base hover:text-yellow-500 transition-colors"
          >
            EXECOM
          </a>
        </li>
        <li>
          <button className="px-4 py-1 text-sm md:text-base bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
            JOIN
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar2;
