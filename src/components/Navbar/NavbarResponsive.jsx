import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const ResponsiveMenu = ({ isOpen }) => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  // Retrieve role from localStorage
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  // Define role-based links
  const StudentLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "My Learning", link: "/mycourses2" },
  ];

  const TeacherLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "My Courses", link: "/mycourses" },
  ];

  const NavLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About Us", link: "/about" },
  ];

  const logout = () => {
    // Remove token and role from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");

    // Set role to null in state
    setRole(null);

    // Redirect to home or login page
    navigate("/");
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute top-20 left-1/2 w-3/4 h-screen z-50 lg:hidden transform -translate-x-1/2"
        >
          <div className="bg-purple text-white py-5 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-6 text-xl">
              {/* Render role-based links */}
              {(role === "student"
                ? StudentLinks
                : role === "teacher"
                ? TeacherLinks
                : NavLinks
              ).map(({ id, name, link }) => (
                <li key={id}>
                  <Link to={link} className="hover:text-gray-300">
                    {name}
                  </Link>
                </li>
              ))}

              {/* Render login and sign-up buttons if not logged in */}
              {!role && (
                <>
                  <li>
                    <Link to="/login" className="hover:text-gray-300">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="hover:text-gray-300">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}

              {/* Render profile and logout if logged in */}
              {role && (
                <>
                  <li>
                    <Link to="/profile" className="hover:text-gray-300">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="text-white hover:text-gray-300"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
