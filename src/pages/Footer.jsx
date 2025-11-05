import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = "Sohel Matubber";

  return (
    <footer className="w-full py-12 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="mailto:sohelmatubber4@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-green-400 hover:text-green-300 transition-colors duration-300"
            aria-label="Email"
          >
            <HiMail className="text-2xl" />
          </a>
          
          <a
            href="https://github.com/sohelcse07"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-white hover:text-gray-300 transition-colors duration-300"
            aria-label="GitHub"
          >
            <AiFillGithub className="text-2xl" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/sohel-matubber-0b07aa289/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin className="text-2xl" />
          </a>
          
          <a
            href="https://www.facebook.com/share/1CyNpgZszt/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-blue-500 hover:text-blue-400 transition-colors duration-300"
            aria-label="Facebook"
          >
            <AiFillFacebook className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p className="text-sm md:text-base">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
          <p className="text-xs mt-1 text-gray-500">
            Crafted with passion and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;