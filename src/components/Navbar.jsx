import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import ScrollIntoView from "react-scroll-into-view";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="md:w-[1280px] flex justify-between items-center mx-auto text-black">
        <div className="">
          <img
            src={logo}
            alt="Brand Image"
            className="md:w-[70%] w-full"
            height={32}
            loading="lazy"
          />
        </div>

        <ul className="md:flex hidden font-mullish text-xl justify-between items-center space-x-5">
          <li className="group">
            <Link to={"/"} className="group-hover:text-red-500">
              Home
            </Link>
            <div className="h-1 w-100 group-hover:block hidden bg-red-500"></div>
          </li>
          <ScrollIntoView selector="#aboutus">
            <li className="group">
              <Link to={"/About Us"} className="group-hover:text-red-500">
                About Us
              </Link>
              <div className="h-1 w-100 group-hover:block hidden bg-red-500"></div>
            </li>
          </ScrollIntoView>
          <li className="group">
            <Link to={"/Our Vision"} className="group-hover:text-red-500">
              Our Vision
            </Link>
            <div className="h-1 w-100 group-hover:block hidden bg-red-500"></div>
          </li>
          <ScrollIntoView selector="#ourproducts">
            <li className="group">
              <Link to={"/Our Products"} className="group-hover:text-red-500">
                Our Products
              </Link>
              <div className="h-1 w-100 group-hover:block hidden bg-red-500"></div>
            </li>
          </ScrollIntoView>
          {/* <li>
            <Link to={"/Testimonials"}>Testimonials</Link>
          </li> */}
          <li></li>
        </ul>

        <Link to={"/Contact Us"}>
          <button className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded hidden md:block text-xl">
            Contact Us
          </button>
        </Link>
        <GiHamburgerMenu className="md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
