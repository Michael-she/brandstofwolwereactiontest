
"use client";

import { Button } from "@/components/ui/button"
import { flightRouterStateSchema } from "next/dist/server/app-render/types";
import Link from "next/link";
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Leaderboard() {

  const [leaderboardData, setLeaderboardData] = useState([]);

   
  useEffect(() => {
  console.log("fetching data")
  fetch('/api/GetAllScore', {
    cache: 'no-store', // Tells the browser not to cache this request
  })
   .then(response => response.json())
   .then(data => {
     console.log(data)
     setLeaderboardData(data);
   });

  }, []);


  return (
    (
    
    
    <div key="1" className="w-full h-full flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="/">
        <button className="text-gray-500 dark:text-gray-400">Back</button>
        </Link>
      </header>


      <div className="flex flex-col  justify-center h-full xl:px-36 lg:px-20 md:px-10 px-4">
      <h1 className="text-4xl font-semibold mb-2 text-center pb-8">Leaderboard</h1>
              
              <div className="flex justify-between xl::text-2xl lg:text-xl md:pt-5 text-md border-b">
              <span className="basis-1/12 text-left border-r border-gray-200 xl:min-w-24 lg:min-w-20 md:min-w-16 min-w-16">Position</span>
                <span className="basis-1/3 text-left border-r border-gray-200 pl-5">Name</span>
                <span className="basis-1/3 text-center  border-gray-200">Time</span>
                <span className="basis-1/3 text-center border-l border-gray-200">Date</span>
              
              
                </div>
                

                <ul className="space-y-0">
                {leaderboardData.map((item, index) => (
                <div className="flex  border-b py-0 " key={index}>

                
                <span className="basis-1/12 text-left border-r py-1 xl:min-w-24 lg:min-w-20 md:min-w-16 min-w-16"> <div className="lg:text-xl  px-2 ">{index+1}) </div></span><span className="basis-1/3 text-left pl-5 py-1 lg:text-lg md:text-md text-sm whitespace-nowrap overflow-ellipsis overflow-hidden block"> {item.name}  </span>
                <span className="basis-1/3 text-center py-1 lg:text-lg md:text-md text-sm">{item.time}ms</span>
                <span className="basis-1/3 text-center py-1 lg:text-lg md:text-md text-sm">{item.date.slice(0, 10)}</span>
                </div>
              
                
                ))}
              </ul>
              
        </div>
</div>

       )
  );
}
