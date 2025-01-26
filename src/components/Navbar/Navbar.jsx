import React, { useState, useEffect } from "react";
import eng from "../../assets/eng.png";
import ara from "../../assets/saudi-arabia.png"; // Assuming you have an Arabic flag icon
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import NavRes from "./NavbarResponsive";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [language, setLanguage] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  // Retrieve role from localStorage on component mount
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  // Toggle language dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    setRole(null); // Reset role in state
    navigate("/"); // Redirect to login page
  };

  // Navigation Links
  const NavLinks = [
    { id: 1, name: { en: "Home", ar: "الرئيسية" }, link: "/" },
    { id: 2, name: { en: "Courses", ar: "الدورات" }, link: "/courses" },
    { id: 3, name: { en: "About us", ar: "معلومات عنا" }, link: "/about" },
  ];

  const StudentLinks = [
    { id: 1, name: { en: "Home", ar: "الرئيسية" }, link: "/" },
    { id: 2, name: { en: "Courses", ar: "الدورات" }, link: "/courses" },
    { id: 3, name: { en: "My Learning", ar: "تعلّمي" }, link: "/mycourses2" },
  ];

  const TeacherLinks = [
    { id: 1, name: { en: "Home", ar: "الرئيسية" }, link: "/" },
    { id: 2, name: { en: "Courses", ar: "الدورات" }, link: "/courses" },
    { id: 3, name: { en: "My Courses", ar: "دوراتي" }, link: "/mycourses" },
  ];

  return (
    <div className="bg-white py-8 px-20">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-bold text-5xl">
          Dz-Skills
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:block w-[45rem]">
          <ul className="flex items-center gap-8 text-xl">
            {/* Role-based Navigation */}
            {(role === "student"
              ? StudentLinks
              : role === "teacher"
              ? TeacherLinks
              : NavLinks
            ).map(({ id, name, link }) => (
              <li key={id}>
                <Link to={link} className="hover:text-purple whitespace-nowrap flex-shrink-0">
                  {name[language]}
                </Link>
              </li>
            ))}

            {/* Language Dropdown */}
            <li className="relative">
              <button
                className="flex items-center gap-3 px-5 py-3 border border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200"
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
                <ul className="absolute right-0 mt-2 border border-gray-200 bg-white rounded-lg shadow-lg">
                  <li
                    className="flex items-center gap-2 px-5 py-3 hover:bg-gray-100 cursor-pointer"
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

            {/* Role-based Buttons */}
            {!role ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="px-6 py-2 rounded-lg bg-white border-2 border-purple text-purple hover:bg-purple-200"
                  >
                    {language === "en" ? "Login" : "Login"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="px-6 py-2 rounded-lg bg-purple text-white hover:bg-purple-200"
                  >
                    {language === "en" ? "Sign up" : "Sign up"}
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/profiledetails"
                    className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    <CgProfile className="text-2xl" />
                    {language === "en" ? "Profile" : "الملف الشخصي"}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="px-6 py-2 rounded-lg bg-purple text-white hover:bg-purple-200"
                  >
                    {language === "en" ? "Logout" : "تسجيل الخروج"}
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <IoMdMenu className="text-4xl" onClick={() => setIsOpen(!isOpen)} />
          <NavRes isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
