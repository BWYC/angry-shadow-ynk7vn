import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="items-center justify-between font-mono">
          <h2>THIS WEBSITE WAS MADE WITH 爱 by [杰斐逊]🍿🎬</h2>
        </div>
        <video
          controls
          src="https://bafybeifss36wsq3yijegmqexb4gya5alvg3a2coozq7xi5vluzh6orteii.ipfs.nftstorage.link/049ba440b11cb959746080453b24d228a4632ee8.mp4"
          autoPlay
          loop
        ></video>
        <div className="items-center justify-between font-mono text-md ">
          <h2>The LITTLE MERMAID (2023) 2HRS 15MIN RATING: ⭐⭐⭐⭐⭐ </h2>
          <p className="left-5 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800  dark:from-inherit  lg:w-auto  lg:rounded-xl lg:bg-gray-200 lg:p-4 lg:dark:bg-black">
            A young mermaid makes a deal with a sea witch to trade her beautiful
            voice for human legs so she can discover the world above water and
            impress a prince.&nbsp;
            <br></br>
          </p>
        </div>
      </main>
    </>
  );
}
