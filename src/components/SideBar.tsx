import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { FaCow } from "react-icons/fa6";
import { GiHealthIncrease } from "react-icons/gi";
import { BiHomeAlt } from "react-icons/bi";
import { LuMilk } from "react-icons/lu";
import { CiMoneyBill } from "react-icons/ci";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineReportProblem } from "react-icons/md";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="w-80 bg-gray-100 text-black flex flex-col justify-between rounded-r-3xl shadow-xl shadow-gray-400">
        <div className="flex items-center justify-center py-6 border-b border-gray-700">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            className="h-12 w-12 rounded-full object-contain"
            height={100}
            width={100}
          />
          <h1 className="font-bold ml-2">SAGAPP</h1>
        </div>

        <nav className="flex-grow">
          <ul className="flex flex-col items-start gap-4 px-6 pt-8">
            <li>
              <Link
                href="/ganado"
                className="flex items-center justify-center gap-3 p-3 rounded-lg hover:bg-gray-200 hover:text-green-600 font-semibold text-xl"
              >
                <FaCow className="text-4xl" />
                <span>Animales</span>
              </Link>
            </li>
            <li>
              <Link
                href="/saludGanado"
                className="flex items-center justify-center gap-3 p-3 rounded-lg hover:bg-gray-200 hover:text-green-600 font-semibold text-xl"
              >
                <GiHealthIncrease className="text-4xl" />
                <span>Monitoreo de salud</span>
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center justify-center gap-3 p-3 rounded-lg hover:bg-gray-200 hover:text-green-600 font-semibold text-xl"
              >
                <BiHomeAlt className="text-4xl" />
                <span>Pastoreo y alimentacion</span>
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center justify-center gap-3 p-3 rounded-lg hover:bg-gray-200 hover:text-green-600 font-semibold text-xl"
              >
                <LuMilk className="text-4xl" />
                <span>Reproduccion</span>
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center justify-center gap-3 p-3 rounded-lg hover:bg-gray-200 hover:text-green-600 font-semibold text-xl"
              >
                <CiMoneyBill className="text-4xl" />
                <span>Financiero</span>
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center justify-center gap-3 p-3 rounded-lg hover:bg-gray-200 hover:text-green-600 font-semibold text-xl"
              >
                <GiAutoRepair className="text-4xl" />
                <span>Mantenimiento e infraestructura</span>
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="flex items-center justify-center gap-3 p-3 rounded-lg hover:bg-gray-200 hover:text-green-600 font-semibold text-xl"
              >
                <MdOutlineReportProblem className="text-4xl" />
                <span>Reportes y analisis</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="py-6 px-6 border-t border-gray-700">
          <button
            className="w-full flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-700  text-white font-medium px-4 py-2 rounded-lg"
            // onClick={() => alert("Logged out")}
          >
            <CiLogout />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      <div className="flex-grow p-6 overflow-x-auto">{children}</div>
    </div>
  );
};

export default Layout;
