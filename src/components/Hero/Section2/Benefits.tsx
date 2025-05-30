"use client";

import React, { useState } from "react";
import { data } from "@/utils/constants";
import Card from "./Card";

const Benefits = () => {
  const [cardData] = useState(data);
  return (
    <section className="py-52 flex gap-5 lg:items-center max-lg:flex-col">
      <div className="left flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="text-[#302B93] text-xl">Benefits</h3>
          <h1 className="font-bold text-4xl">Why Choose TransferX?</h1>
          <p className="text-zinc-400 max-w-96">
            TransferX simplifies file sharing and storage, offering a secure,
            efficient, and developer-friendly platform designed to make your
            digital life easier.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        {cardData &&
          cardData.map((elem) => (
            <div key={elem.id}>
              <Card data={elem} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Benefits;
