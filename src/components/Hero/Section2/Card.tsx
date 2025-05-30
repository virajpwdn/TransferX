import { LucideIcon } from "lucide-react";
import React from "react";

interface CardData {
  id: number;
  title: string;
  text: string;
  icon: LucideIcon;
}

interface CardDataProps {
    data: CardData
}

const Card: React.FC<CardDataProps> = (elem) => {
  const { id, title, text, icon } = elem.data;
  const Icon = icon;
  return (
    <div className="bg-[#1F2937] p-5 rounded-lg h-56 border border-zinc-500/50">
      <div className="top flex justify-between">
        <div className="left">
          <Icon className="text-[#4F45E4]" />
        </div>
        <div className="right font-bold text-4xl text-zinc-500">0{id}</div>
      </div>
      <div className="middle text-2xl font-semibold text-gray-100 mb-4 leading-[110%]">
        {title}
      </div>
      <div className="bottom text-sm text-zinc-300">{text}</div>
    </div>
  );
};

export default Card;
