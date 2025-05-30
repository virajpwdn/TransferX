import React from "react";
import Heading from "@/components/ReuseComps/Heading";
import PriceCard from "./PriceCard";
import { pricing } from "@/utils/constants";

const Pricing = () => {
  return (
    <section className="pb-32">
      <div className="top flex items-center justify-center">
        <Heading
          subtitle="Pricing"
          title="Choose a Plan That Fits Your Needs"
          text="Upload your files and access them anytime with our budget-friendly plans. Simple, secure, and affordable!"
        />
      </div>
      <div className="bottom mx-5 flex max-xl:flex-col items-center justify-center">
        {pricing &&
          pricing.map((elem) => {
            return (
              <div key={elem.id}>
                <PriceCard data={elem} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Pricing;
