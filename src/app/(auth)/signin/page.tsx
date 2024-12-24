/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { login } from "@/utility/action";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password && password) {
      const user = login({ password, telephone: phoneNumber });

      if (user) {
        router.push("/");
      } else {
        return;
      }
    } else {
      return;
    }
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[450px] h-[500px] mx-auto bg-blue-200 my-auto rounded-lg px-4 py-8 space-y-4">
        <p className="text-center text-[32px] text-black font-bold flex flex-wrap items-center justify-center leading-9">
          Welcome to Microloan
        </p>

        <p className="text-center text-[24px] text-black font-bold flex flex-wrap leading-9">
          Sign in
        </p>

        <form action={"submit"} onSubmit={submitHandle} className="space-y-3">
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-black font-bold">
              Phone number
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              className="h-10 rounded-md px-3 text-black "
              placeholder="0786107865"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-black font-bold">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="h-10 rounded-md px-3 text-black "
              placeholder="*********"
            />
          </div>

          <div className="pt-5 space-y-2">
            <button className="w-full mx-auto h-10 rounded-xl bg-black hover:bg-black/75 transition ease-in-out duration-200 text-white">
              Log in
            </button>

            <span className="text-black space-x-2 flex items-center ">
              <p>if you don't have an ancount </p>

              <a href="/signup" className="text-blue-600">
                Register
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
