/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";

const page = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[450px] mx-auto bg-blue-200 my-auto rounded-lg px-4 py-8 space-y-4">
        <p className="text-center w-full text-[32px] text-black font-bold flex items-center justify-center flex-wrap leading-9">
          Welcome to Microloan
        </p>
        <p className="text-center text-[24px] text-black font-bold flex flex-wrap leading-9">
          Sign up
        </p>

        <form action={"submit"} className="space-y-3">
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-black font-bold">
              First name
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="h-10 rounded-md px-3 text-black "
              placeholder="Pacifique"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-black font-bold">
              last name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="password"
              className="h-10 rounded-md px-3 text-black "
              placeholder="pacifque"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-black font-bold">
              Telephone
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
              placeholder="***********"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-black font-bold">
              Re-Password
            </label>
            <input
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              type="password"
              className="h-10 rounded-md px-3 text-black "
              placeholder="*********"
            />
          </div>

          <div className="pt-5 space-y-2">
            <button className="w-full mx-auto h-10 rounded-xl bg-black hover:bg-black/75 transition ease-in-out duration-200 text-white">
              Register
            </button>

            <span className="text-black space-x-2 flex items-center ">
              <p>if you have an count </p>

              <a href="/signin" className="text-blue-600">
                log in
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
