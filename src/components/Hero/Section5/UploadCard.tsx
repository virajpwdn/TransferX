import React from "react";

interface UploadCardProps {
  title: string;
  content: string;
  isPro: boolean;
}

const UploadCard: React.FC<UploadCardProps> = ({ title, content, isPro }) => {
  return (
    <div className="p-5 bg-[#1F2937] border border-zinc-500/50 rounded-lg h-40 w-full sm:h-48 sm:w-72 lg:h-36 lg:w-96 relative">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-zinc-300 text-sm">{content}</p>
      {isPro === true ? <p className="rounded-full bg-[#182234] font-semibold text-sm border border-zinc-300/50 absolute -right-3.5 -top-1.5 px-2 text-center">PRO</p> : <p className="hidden"></p>}
    </div>
  );
};

export default UploadCard;
