import React from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const value = "justify-content: flex-end";
  return (
    <main className="flex justify-center items-center px-5 py-5 w-full h-[607px] bg-black">
      <section className=" grid grid-cols-5 bg-pink-300 w-full h-full">
        <div className=" grid col-span-2 border px-3 py-3">
          <div>Follow the instruction to answer the questions</div>
          <div>Example: align-items-center</div>
          <div className="text-justify">
            "question": "Welcome to FlexSquirelly, a game where you help
            yourself and friends by writing CSS Code! Guide the squirrel to the
            burrow on the right by using the justify-content property, which
            aligns items horizontally and accepts the following values ",
            "insight": "flex-start: Items align to the left side of the
            container. flex-end: Items align to the right side of the container.
            center: Items align at the center of the container.
            space-between:Items display with equal spacing between them.
            space-around: Items display with equal spacing around them. For
            example, justify-content: flex-end; will move the squirrel to the
            right, "
          </div>
        </div>
        <div className="grid col-span-3 px-3 py-3 bg-white">
          <div className={`flex w-full justify-between relative mt-10`}>
            <div
              className={`animate-bounce backimg transition-all duration-300 absolute z-10
          ${value ? "top-5 right-0  " : "top-0 left-0 "}
          h-[100px] w-[100px] flex justify-center items-center `}
            />

            <div className="absolute top-0 right-1 backtree rounded-md h-[100px] w-[100px] flex justify-center items-center " />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Game;
