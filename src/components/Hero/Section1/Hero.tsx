import React from "react";
import Discounts from "./Discounts";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="">
      <div className="top">
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="mt-28">
            <Discounts />
          </div>
          <h1 className="text-6xl font-extrabold leading-[110%] text-center max-sm:text-3xl">
            Your Ultimate Storage <br /> Solution{" "}
            <span className="text-[#302B94]">TransferX</span>
          </h1>
          <p className="text-zinc-300 w-[500px] max-sm:w-full text-center">
            Transform the way you store and manage your data with TransferX –
            The all-in-one platform offering scalable, secure, and efficient
            storage for all your needs.
          </p>
          {/* <div className="max-md:w-full max-md:text-center">
            <Button content={"Login"} style={"bg-[#4E46E4] font-semibold"}/>
          </div> */}
        </div>
      </div>
      <div className="bottom mt-40 ">
        <div className="imgcontainer relative z-0">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-indigo-600/70 rounded-full blur-3xl z-10"></div>
          <div className="relative z-10">
            <Image
              src="https://transferx.in/_next/image?url=%2FHero.png&w=3840&q=75"
              alt="hero-img"
              width={800} // Required for remote images
              height={600} // Required for remote images
              className="w-full z-20 h-auto border border-t-2 border-t-indigo-600/80 rounded-lg" // Optional styling via Tailwind
            />
            <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/30 via-background/50 to-background rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
