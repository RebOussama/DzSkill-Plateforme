import React, { useState } from "react";
import eng from '../../assets/eng.png';
import ara from '../../assets/fr.png'; // Assuming you have an Arabic flag icon
import { IoMdMenu } from 'react-icons/io';
import { IoIosArrowDown } from "react-icons/io";
import NavRes from "./NavbarResponsive";

const NavLinks = [
  { id: 1, name: { en: "Home", ar: "الرئيسية" }, link: "/" },
  { id: 2, name: { en: "About us", ar: "معلومات عنا" }, link: "/" }
];

const Navbar = () => {
  const [language, setLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Event handler or callback functions
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false); // Close the dropdown after selecting
  };

  return (
    <>
      <div className="bg-white py-12 px-20"> {/* Adjusted padding */}
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="font-bold text-5xl">Dz-Skills</div> {/* Adjusted font size */}

          {/* Nav Links section */}
          <div className="hidden md:block w-[45rem] h-[3rem]"> {/* Adjusted height */}
            <ul className="flex items-center gap-8 text-xl"> {/* Adjusted gap and text size */}
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a href={link} className="hover:text-purple whitespace-nowrap flex-shrink-0">
                    {name[language]}
                  </a>
                </li>
              ))}

              {/* Language Dropdown */}
              <li className="relative">
                <button
                  className="flex items-center gap-3 px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200 w-full"  
                  onClick={toggleDropdown}
                >
                  <img
                    src={language === "en" ? eng : ara}
                    alt={language === "en" ? "English Flag" : "Arabic Flag"}
                    className="w-6 h-4"
                  />
                  {language === "en" ? "Eng" : "Ar"}
                  <IoIosArrowDown />
                </button>

                {dropdownOpen && (
                  <ul
                    className="absolute right-0 mt-2 w-full border border-gray-200 bg-white rounded-lg shadow-lg"
                    style={{ minWidth: "100%" }}
                  >
                    <li
                      className="flex items-center gap-2 px-5 py-3 hover:bg-gray-100 text-gris1 cursor-pointer"  
                      onClick={() => changeLanguage("en")}
                    >
                      <img src={eng} alt="English Flag" className="w-6 h-4" />
                      Eng
                    </li>
                    <li
                      className="flex items-center gap-2 px-5 py-3 hover:bg-gray-100 cursor-pointer" 
                      onClick={() => changeLanguage("ar")}
                    >
                      <img src={ara} alt="Arabic Flag" className="w-6 h-4" />
                      Ar
                    </li>
                  </ul>
                )}
              </li>

              {/* Login Button */}
              <li>
                <button className="px-6 py-2 rounded-lg bg-white border-2 border-purple text-purple hover:bg-purple-200">
                  {language === "en" ? "Login" : "تسجيل الدخول"}
                </button>
              </li>

              {/* Sign In Button */}
              <li>
                <button className="px-6 py-2 rounded-lg bg-purple text-white hover:bg-purple-200">
                  {language === "en" ? "Sign In" : "إنشاء حساب"}
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Menu section */}
          <div className="md:hidden">
            <IoMdMenu className="text-4xl" onClick={() => setIsOpen(!isOpen)} />
            <div>
              <NavRes isOpen={isOpen} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
