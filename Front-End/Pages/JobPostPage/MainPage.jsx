<<<<<<< HEAD
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
=======

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
// import IElogo from './assets/IElogo.png';
>>>>>>> b1165d3d (first commit)

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
<<<<<<< HEAD
    <div>
=======
    <div >
>>>>>>> b1165d3d (first commit)
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <img
              src="./assets/IElogo.png"
              alt="IE-network"
              className="h-20 w-20"
            />
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
            {/* Search Icon for Mobile */}
            <div className="flex items-center border-b border-gray-300">
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 focus:outline-none"
              />
              <FiSearch className="text-gray-800 hover:text-blue-600 w-6 h-6" />
            </div>
          </div>

          {/* Navigation Links and Search Icon */}
          <nav className="hidden md:flex items-center space-x-6 text-xl">
            <a href="#home" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="#jobs" className="text-gray-800 hover:text-blue-600">
              Jobs
            </a>
            <a href="#about-us" className="text-gray-800 hover:text-blue-600">
              About Us
            </a>
            <a href="#contact-us" className="text-gray-800 hover:text-blue-600">
              Contact Us
            </a>
            <div className="flex items-center border-b border-gray-300">
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 focus:outline-none"
              />
              <FiSearch className="text-gray-800 hover:text-blue-600 w-6 h-6 cursor-pointer" />
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <a
              href="#home"
              className="block text-gray-800 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#jobs"
              className="block text-gray-800 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Jobs
            </a>
            <a
              href="#contact-us"
              className="block text-gray-800 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Contact Us
            </a>
            <a
              href="#about-us"
              className="block text-gray-800 hover:text-blue-600"
              onClick={toggleMenu}
            >
              About Us
            </a>
          </div>
        )}
      </header>

      {/* home page */}
<<<<<<< HEAD
      <div
        id="home"
        className="flex flex-col mt-6 md:flex-row items-center justify-center md:space-x-4 ml-10"
      >
=======
      <div id="home" className="flex flex-col mt-6 md:flex-row items-center justify-center md:space-x-4 ml-10">
>>>>>>> b1165d3d (first commit)
        <div className="flex-1 m-4">
          <img
            src="./assets/IE_jobpost_pic.jpg"
            alt="IE-network"
            className="w-full h-auto object-cover max-w-lg"
          />
        </div>
        <div className="flex-1 m-4 ">
          <img
            src="./assets/image.png"
            alt="IE-network"
            className="w-full h-auto object-cover max-w-lg"
          />
        </div>
      </div>

<<<<<<< HEAD
=======


>>>>>>> b1165d3d (first commit)
      {/* job post page */}
      <div id="jobs" className="my-16 container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border rounded-3xl p-6 text-xl space-y-2 break-words shadow-2xl hover:shadow-lg transition duration-300 ease-in-out">
            <p>Title: Mernstack Developer</p>
            <p>Education Level: Degree</p>
            <p>Professional Skill (in years): 2</p>
            <p>Required Employee: 10</p>
            <p>Gender: Both</p>
            <div className="flex mt-3 space-x-2">
              <button className="w-26 py-1 px-4 text-white rounded bg-green-600 hover:bg-green-700">
                More
              </button>
<<<<<<< HEAD
              <Link
                to="/ApplyForm"
                className="w-26 py-2 px-4 text-white rounded bg-blue-600 hover:bg-blue-700"
              >
                Apply
              </Link>
=======
              <button className="w-26 py-2 px-4 text-white rounded bg-blue-600 hover:bg-blue-700">
                Apply
              </button>
>>>>>>> b1165d3d (first commit)
            </div>
          </div>

          {/* Card 2 */}
          <div className="border rounded-3xl p-6 text-xl space-y-2 shadow-2xl hover:shadow-lg transition duration-300 ease-in-out">
            <p>Title: Mernstack Developer</p>
            <p>Education Level: Degree</p>
            <p>Professional Skill (in years): 2</p>
            <p>Required Employee: 10</p>
            <p>Gender: Both</p>
            <div className="flex mt-3 space-x-2">
              <button className="w-26 py-1 px-4 text-white rounded bg-green-600 hover:bg-green-700">
                More
              </button>
              <button className="w-26 py-2 px-4 text-white rounded bg-blue-600 hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border rounded-3xl p-6 text-xl space-y-2 shadow-2xl hover:shadow-lg transition duration-300 ease-in-out">
            <p>Title: Mernstack Developer</p>
            <p>Education Level: Degree</p>
            <p>Professional Skill (in years): 2</p>
            <p>Required Employee: 10</p>
            <p>Gender: Both</p>
            <div className="flex mt-3 space-x-2">
              <button className="w-26 py-1 px-4 text-white rounded bg-green-600 hover:bg-green-700">
                More
              </button>
              <button className="w-26 py-2 px-4 text-white rounded bg-blue-600 hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>

          <div className="border rounded-3xl p-6 text-xl space-y-2 shadow-2xl hover:shadow-lg transition duration-300 ease-in-out">
            <p>Title: Mernstack Developer</p>
            <p>Education Level: Degree</p>
            <p>Professional Skill (in years): 2</p>
            <p>Required Employee: 10</p>
            <p>Gender: Both</p>
            <div className="flex mt-3 space-x-2">
              <button className="w-26 py-1 px-4 text-white rounded bg-green-600 hover:bg-green-700">
                More
              </button>
              <button className="w-26 py-2 px-4 text-white rounded bg-blue-600 hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* about us page */}

      <div>
<<<<<<< HEAD
        <div
          id="about-us"
          className="flex flex-col md:flex-row items-center p-8 ml-10"
        >
=======
        <div id="about-us" className="flex flex-col md:flex-row items-center p-8 ml-10">
>>>>>>> b1165d3d (first commit)
          <div className="flex-1 p-4">
            <h1 className="text-4xl font-bold mb-4">15+ YEARS</h1>
            <h2 className="text-4xl font-bold mb-6">of EXPERIENCE in the </h2>
            <h2 className="text-4xl font-bold mb-6"> IT INDUSTRY.</h2>
          </div>
          <div className="flex-1 p-4">
            <p className="text-base leading-7 font-bold">
<<<<<<< HEAD
              IE Networks is a fully Ethiopian owned Company that focuses on
              value maximizing and is a service oriented solution provider,
              established in December 2008.
            </p>
            <p className="text-base leading-7 font-bold mt-4">
              We have been involved exclusively in the areas ranging from
              enterprise network services and business automation intelligence
              to smart infrastructure and cloud services.
=======
              IE Networks is a fully Ethiopian owned Company that focuses on value maximizing and is a service oriented solution provider, established in December 2008.
            </p>
            <p className="text-base leading-7 font-bold mt-4">
              We have been involved exclusively in the areas ranging from enterprise network services and business automation intelligence to smart infrastructure and cloud services.
>>>>>>> b1165d3d (first commit)
            </p>
          </div>
        </div>
      </div>

      {/* contact us page */}

<<<<<<< HEAD
      <div
        id="contact-us"
        className="container mx-auto p-6 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8"
      >
=======
      <div id="contact-us" className="container mx-auto p-6 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
>>>>>>> b1165d3d (first commit)
        {/* Left Side: Contact Information */}
        <div className="w-full md:w-1/2 ml-10 space-y-2">
          <h2 className="text-2xl font-bold mb-4 shadow">Office Address</h2>
          <p className="text-xl">
            7<sup>th</sup> floor on Festival 22 Building
          </p>
          <p className="text-xl">Haya Hulet, Next to Awraris Hotel</p>
          <p className=" text-xl">Addis Ababa, Ethiopia</p>

          <h2 className="text-2xl font-bold mt-10 mb-4 shadow ">
            Contact Info
          </h2>
          <p className="text-xl">
            <strong>Reception:</strong> +251-115-57-0544
          </p>
          <p className="text-xl">
            <strong>People:</strong> +251-115-58-8722
          </p>
          <p className="text-xl">
            <strong>Sales:</strong> +251-115-58-6896
          </p>
          <p className="text-xl">
            <strong>Sales M:</strong> +251-944-10-6717
          </p>
          <p className="text-xl">
            <strong>Fax:</strong> +251-115-570543
          </p>
          <p className="text-xl">
            <strong>P.O.Box:</strong> 122521
          </p>
          <p className="text-xl">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:Info@ienetworksolutions.com"
              className="text-blue-600 hover:underline"
            >
              Info@ienetworksolutions.com
            </a>
          </p>
        </div>

        {/* Right Side: Google Map */}
        <div className="w-full md:w-1/2">
          <iframe
            title="IE Network Solutions Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448.00769407812504!2d38.7870702783771!3d9.010657442248089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c30dbc8c93%3A0xe283d6618c79e0e1!2sIE%20Network%20Solutions!5e1!3m2!1sen!2set!4v1724918057542!5m2!1sen!2set"
            width="100%"
            height="450"
            className="border-0 rounded-md shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default MainPage;
=======
export default MainPage;
>>>>>>> b1165d3d (first commit)
