import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <main className="w-full h-[608px] flex justify-center items-center bg-gray-100">
      <section className="h-[420px] w-[60%] md:w-[85%] md:h-[580px] bg-white grid grid-cols-5 px-2 py-2 rounded-md gap-8">
        <div className="hidden md:grid col-span-2 bg-blue-800 rounded-[10px] px-8 py-10">
          <div className="font-extrabold text-white">CODIFY</div>
          <div className=" flex flex-col gap-5 mb-[90px]">
            <p className="text-[40px] font-serif text-white font-extrabold">
              start your <br /> journey with us.
            </p>
            <p className="text-gray-400 font-semibold text-[20px]">
              discover the world's best <br /> community for software engineers
              <br /> who are ready to learn and teach.
            </p>
          </div>
        </div>
        <div className="grid col-span-1 px-2 py-2 md:grid md:col-span-3 md:px-16 md:py-10">
          <div className="flex flex-col gap-2 ">
            <p className="font-bold text-[20px] ">Sign Up</p>
            <p className="text-[15px] md:text-[18px]">
              Have an <span className=" font-semibold italics">account</span>{" "}
              already?{" "}
              <Link to={"/signin"} className="font-semibold italics">
                signin here
              </Link>
            </p>
          </div>
          <form
            action=""
            className="flex flex-col gap-2 md:flex md:flex-col md:gap-2"
          >
            <div className="flex flex-col gap-1 mb-3 ">
              <label className="font-bold text-[15px] text-gray-500">
                UserName
              </label>
              <input
                type="name"
                className="w-[260px] md:w-[550px] h-[35px] px-3 outline-none bg-transparent  border rounded-[5px]"
                placeholder="Enter userName"
              />
            </div>
            <div className="flex flex-col gap-1 mb-3 ">
              <label className="font-bold text-[15px] text-gray-500">
                Email
              </label>
              <input
                type="email"
                className="w-[260px] md:w-[550px] h-[35px] px-3 outline-none bg-transparent  border rounded-[5px]"
                placeholder="Ener email"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="font-bold text-[15px] text-gray-500">
                Password
              </label>
              <input
                type="password"
                className="w-[260px] md:w-[550px] h-[35px] px-3 outline-none bg-transparent mb-3 border rounded-[5px]"
                placeholder="Enter password"
              />
            </div>
            <Link
              to={"/signin"}
              className="py-2 md:px-10 md:py-4 bg-blue-800 rounded-[5px] text-white font-bold text-[18px] flex justify-center items-center"
            >
              <button type="submit">Create Account</button>
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
