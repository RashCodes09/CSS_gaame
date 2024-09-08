import { useSelector } from "react-redux";

const Css = () => {
  const data = Array.from({ length: 4 });

  const clcicking = useSelector((state: any) => {
    return state.value;
  });

  // const routng = useLocation();
  // const pat = routng.pathname;
  // console.log("mnn", pat);

  //   to get a path name just like in next.js whenwe do usePathName

  //   const readValue = (a: string, b: string) => {
  //     // Remove extra spaces and split by semicolon to get individual properties

  //     let textValue = a
  //       ?.split(";")
  //       ?.map((prop) => prop.trim())
  //       ?.filter(Boolean)
  //       ?.sort();

  //     let answerValue = b
  //       ?.split(";")
  //       ?.map((prop) => prop.trim())
  //       ?.filter(Boolean)
  //       ?.sort();

  //     // Join the sorted arrays back into strings
  //     let aSorted = textValue?.join("; ");
  //     let bSorted = answerValue?.join("; ");

  //     // Compare the resulting strings
  //     return aSorted === bSorted;
  //   };

  return (
    <section className="w-[900px] h-[95vh] bg-green-100 rounded-md p-2 relative">
      <div
        className={`w-full justify-between ${
          clcicking ? "bottom-28" : "top-4"
        } absolute mt-10`}
      >
        {data?.map((el, i: number) => (
          <div
            key={i}
            className={`animate-bounce backimg transition-all duration-300 absolute z-10
    ${clcicking ? "top-5 right-0  " : "top-0 left-0 "}
    h-[100px] w-[100px] flex justify-center items-center `}
          />
        ))}
      </div>

      <div className={`flex w-full justify-between bottom-32 absolute `}>
        {data?.map((el, i: number) => (
          <div
            key={i}
            className="absolute bottom-[300px] right-1 backtree rounded-md h-[100px] w-[100px] flex justify-center items-center "
          />
        ))}
      </div>
    </section>
  );
};

export default Css;
