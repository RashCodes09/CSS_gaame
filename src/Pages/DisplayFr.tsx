import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { MdPlayCircle } from "react-icons/md";

//user inputs
let inputX: number = 18;
let inputPositiveX: number = 18;
let inputY: number = 6;
let anotherYturn: number = 10;
let anotherXturn: number = 18;
let time = 150;

//rounding up user input so they wont be fraction because this will place determines what the display of their output will be
let axisX = Math.round((inputX / 20) * 860);
let axisPostiveX = Math.round((inputPositiveX / 20) * 860);
let axisY = Math.round((inputY / 20) * 860);
let secondaxisY = Math.round((anotherYturn / 20) * 860);
let axisNegativXagain = Math.round((anotherXturn / 20) * 860);

//storing the movment in an array to make calculations on whwne to stop and start
let moveNegativeX = Array.from({ length: axisX / 10 }, (_, i: number) => {
  return -(i + 1) * 10;
});
let moveNegativeXagain = Array.from(
  { length: axisNegativXagain / 10 },
  (_, i: number) => {
    return -(i + 1) * 10;
  }
);
//moving the ball on the Y axis
let moveNegativeY = Array.from({ length: axisY / 10 }, (_, i: number) => {
  return -(i + 1) * 10;
});
//second time Y axis will be moving again
let moveNegativeYsecond = Array.from(
  { length: secondaxisY / 10 },
  (_, i: number) => {
    return -(i + 1) * 10;
  }
);
let moveStopX = Array.from({ length: moveNegativeY.length }, () => {
  return moveNegativeX[moveNegativeX.length - 1];
});

let moveStopYagainsecond = Array.from({ length: moveNegativeX.length }, () => {
  return 0;
});
let moveStopYfirst = Array.from({ length: moveNegativeY.length }, () => {
  return moveNegativeX[moveNegativeX.length - 1];
});
let moveStopY = Array.from({ length: moveNegativeX.length }, () => {
  return 0;
});
let moveStopYagain = Array.from({ length: moveNegativeX.length }, () => {
  return moveNegativeY[moveNegativeY.length - 1];
});
let rotateX = Array.from({ length: moveNegativeX.length }, () => {
  return 0;
});
let rotateY = Array.from({ length: moveNegativeY.length }, () => {
  return 90;
});

let moveStopXagain = Array.from({ length: moveNegativeY.length }, () => {
  return moveNegativeX[moveNegativeX.length - 1];
});
let movePositiveX = Array.from(
  { length: axisPostiveX / 10 },
  (_, i: number) => {
    return moveNegativeX[moveNegativeX.length - 1] + (i + 1) * 10;
  }
);
// console.log("element", movePositiveX);

const Ball: FC<any> = ({ toggle }) => {
  const variants: {} = {
    hidden: { x: 0, y: 0, rotate: 0 },
    visible: {
      x: moveNegativeX.concat(
        moveStopX,
        moveStopXagain
        // movePositiveX
        // moveNegativeXagain
      ),
      y: moveStopY.concat(
        moveStopYfirst,
        moveNegativeY,
        moveStopYagain
        // moveStopYagainsecond,
        // moveNegativeYsecond
      ),
    },
    rotate: rotateX.concat(rotateY),
    transition: {
      duration: time,
      ease: "easeInOut",
      //   repeat: "infinity",
      //   repeatType: "reverse",
    },
  };
  return (
    <motion.div
      variants={toggle && variants}
      initial="hidden"
      animate="visible"
      className="w-10 h-10 rounded-full bg-pink-600 relative "
    >
      <div className="w-2 h-2 bg-white rounded-full absolute left-1 top-4 " />
    </motion.div>
  );
};

const DisplayFr = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className="">
      <MdPlayCircle
        onClick={() => {
          setToggle(true);
          const timer = setTimeout(() => {
            setToggle(false);
            clearTimeout(timer);
          }, time * 1000);
        }}
        className="text-blue-800 text-[40px] absolute top-2 left-5 hover:text-red-500 cursor-pointer duration-300 transition-all"
      />
      <div className="w-4 h-4 rounded-full bg-red-500 absolute left-10 top-20" />
      <div className="w-4 h-4 rounded-full bg-green-500 absolute right-6 top-[45%]" />
      <div className="w-[750px] h-5 rounded-md bg-gray-600 absolute right-0 bottom-20" />
      <div className="w-5 h-[130px] rounded-md bg-gray-600 absolute left-10 top-[18%]" />
      <div className="absolute right-5 bottom-5  ">
        <Ball toggle={toggle} />
      </div>
    </div>
  );
};

export default DisplayFr;
