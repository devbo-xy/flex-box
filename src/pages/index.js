import React from "react";

export default function Home() {
  return (
    <div className="lg:h-screen h-full w-full flex items-center justify-center bg-[#CECECE] lg:py-[5rem] p-8 flex-col space-y-8">
      <div className="max-w-sm mx-auto lg:block hidden">
        <h2 className="border-b-2 border-b-black text-5xl p-4 uppercase">
          Desktop
        </h2>
      </div>
      <div className="max-w-sm mx-auto lg:hidden block">
        <h2 className="border-b-2 border-b-black text-2xl lg:text-5xl p-4 uppercase">
          Mobile
        </h2>
      </div>
      <div className="w-full max-w-7xl h-full mx-auto bg-[#FF7573] flex flex-col lg:flex-row lg:space-x-10 px-4 py-4 lg:px-8 lg:py-12 rounded-2xl">
        <div className="bg-[#7798FF] flex justify-center rounded-3xl w-full h-[15rem] lg:w-[40rem] lg:h-full items-center">
          <h2 className="uppercase text-3xl lg:text-6xl text-semibold">
            Item 1
          </h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-col space-y-4 lg:space-y-8">
          <div className="bg-[#78FFFB] flex justify-center rounded-2xl lg:rounded-3xl w-full h-[8rem] lg:w-[35rem] lg:h-[15rem] items-center mt-4 lg:mt-0">
            <h2 className="uppercase text-3xl lg:text-6xl text-semibold">
              Item 4
            </h2>
          </div>
          <div className="flex justify-between space-x-4 lg:space-x-10">
            <div className="bg-[#75FFA7] flex justify-center rounded-2xl lg:rounded-3xl w-full h-[8rem] lg:w-full lg:h-[15rem] items-center">
              <h2 className="uppercase text-3xl lg:text-6xl text-semibold">
                Item 2
              </h2>
            </div>
            <div className="bg-[#EFFF76] flex justify-center rounded-2xl lg:rounded-3xl w-full h-[8rem] lg:w-full lg:h-[15rem] items-center">
              <h2 className="uppercase text-3xl lg:text-6xl text-semibold">
                Item 3
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
