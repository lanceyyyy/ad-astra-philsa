"use client";
import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="min-w-screen "
      style={{
        overflow: "hidden",
      }}
    >
      <Image
        src="/landing-banner.svg"
        width={10000}
        height={400}
        style={{
          margin: "0",
        }}
        alt="Hero"
      />
    </div>
  );
};

export default Banner;
