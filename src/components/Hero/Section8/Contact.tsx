"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex justify-between py-32 max-md:flex-col max-md:gap-8">
      <div className="left">
        <h3 className="text-[#4F45E4] text-xl">Contact</h3>
        <h1 className="text-3xl font-black py-3">Need More Storage?</h1>
        <p className="text-zinc-400 max-w-[500px]">
          Looking for storage options beyond our current plans? Drop us an
          email, and we’ll be happy to discuss a solution that works for you!
        </p>

        <div className="pt-8 flex gap-3">
          <div className="left">
            <Mail />
          </div>
          <div className="right font-semibold">Mail Us</div>
        </div>
        <p>support@transferx.in</p>
      </div>
      <div className="right w-[45%] bg-[#1F2937] rounded-md max-md:w-full">
        <div className="details w-full max-w-2xl mx-auto p-6">
          <form className="space-y-6">
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-200 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-200 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-200 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                // rows=5
                className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Enter your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3C35AC] cursor-pointer text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:bg-[#3d35acb6] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
