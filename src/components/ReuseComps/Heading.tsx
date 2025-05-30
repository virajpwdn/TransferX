import React from "react";

interface HeadingProps {
  subtitle: string;
  title: string;
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ subtitle, title, text }) => {
  return (
    <div>
      <div className="top text-center flex flex-col gap-1.5">
        <h4 className="text-[#4F45E4] text-lg">{subtitle}</h4>
        <h1 className="font-black text-4xl">{title}</h1>
        <p className="text-zinc-400 max-w-[550px] leading-[140%] text-lg pb-16 text-center mx-auto">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Heading;
