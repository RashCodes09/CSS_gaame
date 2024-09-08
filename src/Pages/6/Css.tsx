import { useSelector } from "react-redux";

const Css6 = () => {
  const data = Array.from({ length: 4 });

  const clcicking = useSelector((state: any) => {
    return state.value;
  });

  console.log("Correct", clcicking);

  return (
    <section className="w-[900px] h-[90vh] bg-green-100 rounded-md p-2 relative">
      <div
        className={`w-full justify-between ${
          clcicking ? "bottom-[54%]" : "top-4"
        } absolute mt-10`}
      >
        {data?.map((el, i: number) => (
          <div
            key={i}
            className={`animate-bounce backimg transition-all duration-300 absolute z-10
          ${
            clcicking
              ? " right-[41%] "
              : "top-3  right-0 [&:nth-child(2)]:left-[44%] [&:nth-child(1)]:left-0"
          }
          h-[100px] w-[100px] flex justify-center items-center`}
          />
        ))}
      </div>

      <div className={`flex w-full justify-between bottom-[55%] absolute `}>
        {data?.map((el, i: number) => (
          <div
            key={i}
            className="absolute right-[41%] backtree rounded-md h-[100px] w-[100px] flex justify-center items-center "
          />
        ))}
      </div>
    </section>
  );
};

export default Css6;
