import React from "react";

interface PriceData {
  id: number;
  type: string;
  duration: number | null;
  rs: string;
  ogRs: string;
  features: string[];
}

interface PriceProps {
  data: PriceData;
}

const PriceCard: React.FC<PriceProps> = (props) => {
    const { type, duration, rs, ogRs, features } = props.data;
  
    return (
      <div
        className={`flex flex-col justify-between p-5 bg-[#1F2937] border rounded-md w-96
          ${type === "Basic" ? "border-[#3C35AC] border-4" : "border-zinc-400/50"}`}
      >
        <div>
          <h2 className="font-bold text-2xl text-white">{type}</h2>
          <div className="pricing mb-4">
            <span className="text-3xl font-bold text-white">₹{rs}</span>
            <span className="text-lg text-gray-400 line-through ml-2">₹{ogRs}</span>
            <p className="text-sm text-gray-400">
              / {type !== "Free" ? `${duration}` : ""}{" "}
              {type === "Free" ? "month" : "months"}
            </p>
          </div>
  
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {features &&
              features.map((elem, idx) => (
                <li key={idx}>{elem}</li>
              ))}
          </ul>
        </div>
  
        <button
          className={`mt-6 px-5 py-2 rounded font-medium text-white ${
            type === "Basic" ? "bg-[#3C35AC]" : "bg-[#5B6371]"
          } hover:opacity-90 transition-opacity`}
        >
          Get Started
        </button>
      </div>
    );
  };
  

export default PriceCard;