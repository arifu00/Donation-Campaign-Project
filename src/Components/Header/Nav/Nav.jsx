import { NavLink } from "react-router-dom";
import logo from "./Logo.png";

const Nav = () => {
  return (
    <div>
      <nav className="md:flex mb-5 justify-between px-4 md:px-12 py-3 md:py-6 items-center">
        {/* logo part */}
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="">
          <ul className="flex mt-5 justify-center gap-4 text-lg font-bold text-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""
                }>
                Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""
                }>
                Donation
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""
                }>
                Statistics
              </NavLink>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
