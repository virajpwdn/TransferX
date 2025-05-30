import React from "react";
import Heading from "@/components/ReuseComps/Heading";
import { uploadServices } from "@/utils/constants";
import UploadCard from "./UploadCard";

const Upload = () => {
  return (
    <section className="py-20">
      <div className="top flex items-center justify-center">
        <div>
          <Heading
            subtitle="Services"
            title="Empower Your File Upload"
            text="From flexible storage solutions to secure file sharing, TransferX provides all the tools you need to streamline your file management and enhance collaboration."
          />
        </div>
      </div>
      <div className="flex justify-center items-center pb-20">
        <div className="bottom grid grid-cols-2 grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-1 gap-6">
          {uploadServices.map((elem) => {
            return (
              <div key={elem.id}>
                <UploadCard
                  title={elem.title}
                  content={elem.content}
                  isPro={elem.isPro}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Upload;
