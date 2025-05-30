import React from "react";
import { platforms, about, policies } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0F] text-gray-300 px-8 py-16 md:px-32 border-t border-zinc-700">
      <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
        {/* Brand Section */}
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">TransferX.in</h1>
          <p className="text-sm max-w-sm">
            Revolutionizing secure file transfers with simplicity and speed. Trusted by developers, teams, and enterprises.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap gap-10 text-sm">
          <div>
            <h5 className="font-semibold text-white mb-2">Platforms</h5>
            <ul className="space-y-1">
              {platforms.map((item, idx) => (
                <li key={idx} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-2">About</h5>
            <ul className="space-y-1">
              {about.map((item, idx) => (
                <li key={idx} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-2">Policies</h5>
            <ul className="space-y-1">
              {policies.map((item, idx) => (
                <li key={idx} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-10 border-zinc-600" />

      <div className="text-center text-xs text-gray-400">
        © 2024 Designed and developed by <span className="text-[#4F45E4]">team TransferX</span>
      </div>
    </footer>
  );
};

export default Footer;
