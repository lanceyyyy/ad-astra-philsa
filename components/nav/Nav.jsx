import Image from "next/image";
import SearchBox from "./SearchBox";

const Nav = () => {
  return (
    <nav className="bg-[#1F5383] w-full py-2 px-4 md:px-7 flex justify-between items-center overflow-hidden">
      <div className="flex flex-row ">
        <span className=" drop-shadow-lg pr-2 md:pr-4">
          <Image src="/logo.png" width={50} height={50} alt="PhilSA Logo" />
        </span>

        <span>
          <h1 className="md:text-2xl text-lg font-bold text-white">
            PHILIPPINE SPACE AGENCY
          </h1>
          <p className="italic text-white  text-md md:text-xl">
            Ad Astra Scholarship
          </p>
        </span>
      </div>
      <div className="hidden md:block">
        <div className="flex">
          <span className="text-white flex pr-6">
            <p>Alumni</p>
            <p className="px-2"> | </p>
            <p>News & Events</p>
          </span>
          <SearchBox />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
