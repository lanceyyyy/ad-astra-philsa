"use client";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";

const HomeMenuBar = () => {
  return (
    <div className="bg-[#262626] text-white  flex w-screen items-center justify-center md:justify-start">
      <Link className=" bar_selection" href="/">
        <Button className="text-white bg-transparent text-xs md:text-base">
          Home
        </Button>
      </Link>

      <span className="bar_selection">
        <Dropdown>
          <DropdownTrigger>
            <Button className="text-white bg-transparent text-xs md:text-base">
              <p>Programs</p>
              <IoMdArrowDropdown className="text-white text-2xl" />
            </Button>
          </DropdownTrigger>

          {/* <DropdownMenu
            aria-label="Static Actions"
            className="bg-[#262626] text-white rounded-md"
          >
            <DropdownItem>System Engineering</DropdownItem>
            <DropdownItem>Electronics Engineering</DropdownItem>
            <DropdownItem>Aerospace Engineering</DropdownItem>
            <DropdownItem>Digital and Analogue Electronics</DropdownItem>
            <DropdownItem>Mechanical Engineering</DropdownItem>
            <DropdownItem>RF Electronics</DropdownItem>
            <DropdownItem>Orbit</DropdownItem>
            <DropdownItem>Dynamics Mission and Synthesis</DropdownItem>
            <DropdownItem>Data Analytics</DropdownItem>
            <DropdownItem>Atmospheric Science</DropdownItem>
            <DropdownItem>Hydrological Science</DropdownItem>
            <DropdownItem>Climate Change and Variability</DropdownItem>
            <DropdownItem>Ocean Science</DropdownItem>
            <DropdownItem>Geological Science</DropdownItem>
            <DropdownItem>Earth Science Applications</DropdownItem>
            <DropdownItem>Earth System Modelling</DropdownItem>
            <DropdownItem>
              Biology and Biogeochemistry of Ecosystems
            </DropdownItem>
            <DropdownItem>Geospatial Science and Technologies</DropdownItem>
            <DropdownItem>Fundamental Physics</DropdownItem>
            <DropdownItem>Nanoscience</DropdownItem>
            <DropdownItem>Astronomy and Astrophysics</DropdownItem>
            <DropdownItem>Space Physics</DropdownItem>
            <DropdownItem>Planetary Science</DropdownItem>
            <DropdownItem>
              Terrestrial and Planetary Environmental Science and Engineering
            </DropdownItem>
            <DropdownItem>Nanotechnology</DropdownItem>
            <DropdownItem>Space Education</DropdownItem>
            <DropdownItem>Space Industry</DropdownItem>
            <DropdownItem>Space Law</DropdownItem>
            <DropdownItem>Space Policy</DropdownItem>
            <DropdownItem>Space Diplomacy. </DropdownItem>
          </DropdownMenu> */}
        </Dropdown>
      </span>
      <span className="bar_selection">
        <Button className="text-white bg-transparent text-xs md:text-base">
          <Link href="/about">About</Link>
        </Button>
      </span>
      <span className="bar_selection">
        <Button className="text-white bg-transparent text-xs md:text-base">
          <Link href="/apply">Apply Now</Link>
        </Button>
      </span>
    </div>
  );
};

export default HomeMenuBar;
