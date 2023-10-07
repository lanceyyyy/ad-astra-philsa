"use client";
import Banner from "./Banner";
import HomeMenuBar from "./HomeMenuBar";
import { Button, ButtonGroup } from "@nextui-org/react";
import { BsFillBoxFill } from "react-icons/bs";
import Image from "next/image";
import IconStatistics from "./IconStatistics";
import LandingStatistics from "./LandingStatistics";
import TestimonyCard from "./TestimonyCard";

const Main = () => {
  return (
    <div className="w-screen overflow-hidden ">
      <div>
        <HomeMenuBar />
        <Banner />
      </div>
      <div
        style={{
          background: "url(/landing-side-bg.svg) no-repeat left center",
          backgroundSize: "auto",
        }}
      >
        <div className="md:px-[10%]">
          <section className="flex flex-col md:flex-row-reverse items-center pt-6 ">
            <span className="flex flex-col items-center w-1/2">
              <span className="text-[#262626] font-extrabold text-5xl">
                EXPLORE
              </span>
              <span className="flex text-5xl font-extrabold">
                <p className="text-[#1F5383] pr-4">Ad</p>
                <p className="text-[#F5CC67]">Astra</p>
              </span>
              <span className="pt-3">
                <Button className="text-[12px] bg-[#1F5383] text-white">
                  HOW TO APPLY
                </Button>
              </span>
            </span>

            <span className="w-3/4 md:w-1/2 text-justify pt-5 font-semibold ">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
                totam voluptas exercitationem cumque quidem numquam iusto est
                vel sequi impedit quis assumenda, voluptatibus expedita modi
                dicta deserunt, architecto vitae tempore. Vel quidem non porro?
                Qui, unde? Fugiat nulla odio pariatur ratione aliquam recusandae
                ipsa impedit quidem nisi velit voluptate, placeat, dolore, rem
                culpa earum deserunt quia voluptatum perspiciatis voluptas
                dicta.
              </p>
            </span>
          </section>

          <section className="flex flex-col md:flex-row items-center">
            <span className="w-1/2 md:pr-10 py-10">
              <Image src={"/landing-photo.svg"} width={500} height={300} />
            </span>
            <span className="w-3/4 md:w-1/2 text-justify font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim a,
              esse possimus explicabo natus reprehenderit, obcaecati similique
              unde sunt, maiores doloribus. Architecto soluta deserunt enim cum
              minima illo quas officiis. Perspiciatis facere inventore
              distinctio sed? Quidem repellat beatae deserunt iste saepe non
              magni, voluptate repudiandae modi at illo. Architecto voluptates
              reprehenderit odio aspernatur necessitatibus doloremque accusamus
              illum sequi consectetur facilis.
            </span>
          </section>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <IconStatistics name="Name" icon={<BsFillBoxFill size={70} />} />
          <IconStatistics name="Name" icon={<BsFillBoxFill size={70} />} />
          <IconStatistics name="Name" icon={<BsFillBoxFill size={70} />} />
        </div>
        <div className="bg-[#1F5383] w-full flex flex-col md:flex-row items-center justify-center py-10">
          <p className="text-white font-medium text-xl md:mr-10">
            Join the list of our growing Scholars!
          </p>
          <LandingStatistics number="96" title="Current Scholars" />
          <LandingStatistics number="24" title="Pending Applicants" />
        </div>
      </div>

      <div
        className="py-[10%] flex justify-center relative test"
        style={{
          position: "relative",
        }}
      >
        <TestimonyCard
          url={"/avatar.jpg"}
          fname="Robert"
          lname="Sy"
          school="Technological University of the Philippines - Manila"
          course="Bachelor of Science in Information Technology"
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odio qui deleniti dolorem sequi et eius, assumenda dolorum fugit asperiores quis consequatur sint corporis, nobis labore totam consequuntur at. Quis."
        />
      </div>
    </div>
  );
};

export default Main;
