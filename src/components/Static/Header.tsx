import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navvs = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 1,
      name: "Features",
      url: "/features",
    },
    {
      id: 1,
      name: "About",
      url: "/about",
    },
    {
      id: 1,
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <main className="w-full h-[50px] flex justify-center items-center bg-slate-500">
      <div className="w-[80%] h-full flex justify-between items-center">
        <div className="flex justify-center items-center font-bold text-[19px]">
          Logo
        </div>
        <div className="flex justify-bewteen items-center gap-5 ">
          {navvs.map((el: any) => (
            <Link key={el.id} to={el.url}>
              <nav>{el.name}</nav>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link to={"/dashboard"} className="text-[20px] font-semibold">
            Signin
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Header;
