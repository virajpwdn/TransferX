import React from "react";
import { navCards } from "@/utils/constants";

const NavCard: React.FC = () => {
  return (
    <div className="flex items-center gap-8 p-4 bg-[#020817] w-[32rem] border border-zinc-400/50">
      <div className="left">
        <h1 className="text-5xl">TransferX</h1>
      </div>
      <div className="right flex flex-col gap-4">
        {navCards &&
          navCards.map((elem) => {
            return (
              <div key={elem.id}>
                <h4>{elem.title}</h4>
                <p className="text-zinc-400">{elem.text}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NavCard;
