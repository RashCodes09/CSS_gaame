import { useSelector } from "react-redux";

const Css5 = () => {
  const data = Array.from({ length: 4 });

  const clcicking = useSelector((state: any) => {
    return state.value;
  });

  console.log("Correct", clcicking);

  return (
    <section className="w-[900px] h-[90vh] bg-green-100 rounded-md p-2 relative">
      <div className={`flex w-full justify-between relative mt-10`}>
        {data?.map((el, i: number) => (
          <div
            key={i}
            className={`animate-bounce backimg transition-all duration-300 absolute z-10
  ${
    clcicking
      ? "top-3 right-0 [&:nth-child(1)]:left-0"
      : "top-3 left-0 [&:nth-child(1)]:left-14"
  }
  h-[100px] w-[100px] flex justify-center items-center`}
          />
        ))}
      </div>

      <div className={`flex w-full justify-between relative `}>
        {data?.map((el, i: number) => (
          <div
            key={i}
            className="absolute top-0 right-0 [&:nth-child(1)]:left-0 backtree rounded-md h-[100px] w-[100px] flex justify-center items-center "
          />
        ))}
      </div>
    </section>
  );
};

export default Css5;
