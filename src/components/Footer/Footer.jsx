import React from "react";
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaYoutube, 
  FaInstagram, FaGooglePlus, FaRss, FaPhoneAlt, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* Brand Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h3 className="text-2xl font-bold mb-4">Dz-Skills</h3>
          </div>

          {/* Contact Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 space-y-6">
            {/* Address */}
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-purple" />
              <p>ESTIN École Supérieure en Informatique</p>
            </div>

            {/* Phone and Printer */}
            <div className="flex justify-between items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-purple" />
                <p className="whitespace-nowrap">(123) 456-7890</p>
              </div>
              <div className="flex items-center space-x-2">
                <AiFillPrinter size={24} className="text-purple" />
                <p className="whitespace-nowrap">(123) 456-7890</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h3 className="text-lg text-black2 mb-4">Social Media</h3>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaGooglePlus, FaRss].map((Icon, index) => (
                <a key={index} href="#" className="text-purple hover:text-gris3">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gris3 mx-auto my-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-wrap justify-between items-center text-sm">
          {/* Quick Links */}
          <ul className="list-none flex flex-wrap gap-4">
            {["About Us", "Contact Us", "Help", "Privacy Policy", "Disclaimer"].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-black2 hover:text-purple whitespace-nowrap">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-black2 whitespace-nowrap mt-4 sm:mt-0">
            Copyright © 2018 • Lift Media Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
