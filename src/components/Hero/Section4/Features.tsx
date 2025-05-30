import React from "react";
import Heading from "@/components/ReuseComps/Heading";
import { features } from "@/utils/constants";

const Features = () => {
  return (
    <section>
      <div className="top flex flex-col gap-3 items-center pb-10 pt-32">
        <Heading
          subtitle="Features"
          title="What Makes TransferX Unique"
          text="Discover how TransferX makes file sharing and storage effortless, secure, and tailored for individuals and businesses alike."
        />
      </div>
      <div className="bottom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-32">
        {features.map((elem) => {
          const Icon = elem.icon;
          return (
            <div
              key={elem.id}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <div className="outer bg-[#0A0F2C] p-2 rounded-full">
                <div className="inner bg-[#121440] rounded-full w-12 h-12 flex items-center justify-center">
                  <Icon className="text-[#4F45E4] w-8 h-8" />
                </div>
              </div>
              <h2 className="text-xl font-semibold">{elem.title}</h2>
              <p className="text-zinc-400 max-w-96 text-center">{elem.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
