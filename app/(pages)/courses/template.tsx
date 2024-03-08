'use client';
import { PropsWithChildren, useState } from "react";
import dynamic from "next/dynamic";
import CryptoNews from "@/app/components/CryptoNews/CryptoNews.server";
const ClockNoSSR = dynamic(()=>import("@/app/components/Clock/Clock"), {ssr: false});

export default function CoursesTemplate({children} : PropsWithChildren){
  const [rating, setRating] = useState('');

  const sendRating = () => {
    alert('Rating submitted. Thanks for your feedback!');
  }
  return(
    <>
      {children}
      <div className="fixed bottom-10 right-10 flex items-end gap-4">
        <ClockNoSSR />
        <div>
          Rate this page
          <div className="flex space-x-2">
            <input className="block border border-slate-200 w-10"/>
            <button 
              className="text-xs bg-yellow-500 text-white rounded-lg pl-4 pr-4"
              onClick={sendRating}
            >
              Send Rating
            </button>
          </div>
        </div>
      </div>
      <CryptoNews />
    </>
  );
}