import React from "react";
import { accordian } from "@/utils/constants";

const Accordian = () => {
  return (
    <div className="py-32">
      <div className="top flex flex-col items-center justify-center">
        <h3 className="text-[#4F45E4] text-xl text-center">FAQS</h3>
        <h1 className="font-semibold text-4xl text-center">Common Questions</h1>
      </div>

      <div className="bottom mt-10">
        {accordian &&
          accordian.map((elem) => {
            return (
              <div
                key={elem.id}
                className="collapse collapse-arrow border border-base-300"
              >
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">
                  {elem.question}
                </div>
                <div className="collapse-content text-sm">{elem.answer}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Accordian;
