import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              onClick={() => navigate("/")}
              style={{ height: "100px" }}
              src={require("../logo.png")}
              alt="logo"
            />
            {/* <span class="ml-3 text-xl">MyWorld</span> */}
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a
              onClick={() => navigate("/")}
              class="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => navigate("/about")}
              class="mr-5 hover:text-gray-900 cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => navigate("/contact")}
              class="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Contact
            </a>
            {/* <a
              onClick={() => navigate("/registration")}
              class="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Registration
            </a> */}
            <a
              onClick={() => navigate("/details")}
              class="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Details
            </a>
            <a
              onClick={() => navigate("/Upload")}
              class="mr-5 hover:text-gray-900 cursor-pointer"
            >
              File Upload
            </a>
          </nav>

          <button
            onClick={() => navigate("/auth")}
            class="inline-flex items-center bg-blue-200 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0 mr-2"
          >
            {" "}
            Login/Sign up
          </button>
          
        </div>
      </header>
    </>
  );
}

export default Navbar;
