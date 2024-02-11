
"use client";

import { Button } from "@/components/ui/button"
import { flightRouterStateSchema } from "next/dist/server/app-render/types";
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function Leaderboard() {

  const [leaderboardData, setLeaderboardData] = useState([]);

   
  useEffect(() => {
   fetch('/api/GetAllScore')
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
        <button className="text-gray-500 dark:text-gray-400" onClick={href="/"}>Back</button>
      </header>
      <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
              <ul className="space-y-2">
                {leaderboardData.map((item, index) => (
                <div className="flex justify-between" key={index}>
                <span className="basis-1/3 text-left">{index})    {item.name}</span>
                <span className="basis-1/3 text-center">{item.time}ms</span>
                <span className="basis-1/3 text-right">{item.date.slice(0, 10)}</span>
              </div>
              
              
                ))}
              </ul>
        </div>


       )
  );
}