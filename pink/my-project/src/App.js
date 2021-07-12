import React, { Component, useEffect, useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useHttp } from "./myHooks/hook";

function App() {
  const { loading, request, error, clearError } = useHttp();
  const [flag, setflag] = useState(<div></div>);

  useEffect(async () => {
    try {
      const data = await request("https://restcountries.eu/rest/v2/all");
      console.log(data);
      setflag(
        data.map((item) => {
          return (
            <div className="flex max-w-sm rounded-sm overflow-hidden shadow-lg m-12 bg-gradient-to-r from-pink-100">
            <div className="mx-6 my-4 border-b border-gray-light">
            <img class="w-16 h-16 rounded-full mr-4" src={item.flag} alt="Avatar of Writer"/>
            </div>
              <div className="mx-6 my-4 border-b border-gray-light">
                <div className="font-medium text-base text-gray-darker mb-4">
                  {item.name}
                </div>
                <p className="font-normal text-gray-dark text-sm mb-2">
                  region: {item.region}
                </p>
                <p className="font-normal text-gray-dark text-sm mb-4">
                  population  {item.population}
                </p>
              </div>
            </div>
          );
        })
      );
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="border border-red-700 w-1/3 h-9"></div>
        <div className="border flex justify-center border-red-700 w-1/3 h-9 ">
          aleluya
        </div>
        <div className="border border-red-700 w-1/3 h-9 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLin
              ecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
      </div>
      <div className="flex">
        <div className="border border-red-700 w-1/5 h-96"></div>
        <div className="flex justify-center flex-wrap content-center border border-red-700 w-3/5 h-96">
          <div className="border border-red-700 w-4/5 h-3/4 rounded-lg bg-indigo-300 "></div>
        </div>
        <div className="border border-red-700 w-1/5 h-96"></div>
      </div>
      <form>
        <input className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..." />
      </form>
      <div className="flex flex-wrap">
      {flag}
      </div>

    </div>
  );
}

export default App;
