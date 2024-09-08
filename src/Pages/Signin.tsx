import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <main className="w-full h-[100%] flex justify-center items-center bg-gray-100">
      <section className="h-[420px] w-[60%] md:w-[85%] md:h-[580px] bg-white grid grid-cols-5 px-2 py-2 rounded-md gap-8">
        <div className="hidden md:grid col-span-2 bg-blue-800 rounded-[10px] px-8 py-10">
          <div className="font-extrabold text-white">CODIFY</div>
          <div className=" flex flex-col gap-5 ">
            <p className="text-[40px] font-serif text-white font-extrabold">
              Start your <br /> journey with us.
            </p>
            <p className="text-gray-400 font-semibold text-[20px]">
              Discover the world's best <br /> community for software engineers
              <br /> who are ready to learn and teach.
            </p>
          </div>
        </div>
        <div className="grid col-span-full px-2 py-10 md:col-span-3 md:px-16 md:py-24">
          <div className="flex flex-col gap-2 ">
            <p className="font-bold text-[20px] ">Sign In</p>
            <p className="text-[14px] md:text-[16px]">
              Don't have an
              <span className="text-[14px] md:[16px] font-medium italic mr-2 ml-1">
                account?
              </span>
              <Link
                to={"/"}
                className="font-semibold italics text-blue-800 underline text-[16px]"
              >
                Register here
              </Link>
            </p>
          </div>
          <form action="" className="flex flex-col gap-2 ">
            <div className="flex flex-col gap-1 mb-3 ">
              <label className="font-bold text-[15px] text-gray-500">
                Email
              </label>
              <input
                type="email"
                className="w-full h-[35px] px-3 outline-none bg-transparent  border rounded-[5px] placeholder:text-[14px] placeholder:italic"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="font-bold text-[15px] text-gray-500">
                Password
              </label>
              <input
                type="password"
                className="w-full h-[35px] px-3 outline-none bg-transparent mb-3 border rounded-[5px] placeholder:text-[14px] placeholder:italic"
                placeholder="Enter password"
              />
            </div>
            <Link
              to={"/game"}
              className="py-2  md:px-10  md:py-4 bg-blue-800 rounded-[5px] text-white font-bold text-[18px] flex justify-center items-center"
            >
              <button type="submit">Sign In</button>
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signin;
