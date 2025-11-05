import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const navItems = [
    { id: 1, label: "About", to: "about" },
    { id: 2, label: "Skills", to: "tech" },
    { id: 3, label: "Projects", to: "project" },
    { id: 4, label: "Education", to: "education" },
    { id: 5, label: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar when clicking outside (optional improvement)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isSidebarOpen &&
        !e.target.closest(".mobile-sidebar") &&
        !e.target.closest(".menu-toggle")
      ) {
        setIsSidebarOpen(false);
      }
    };
    if (isSidebarOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? -100 : 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed w-full z-50 hidden lg:block transition-all duration-300 lg:px-24 ${
          isScrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold text-green-400 cursor-pointer"
          >
            <Link to="home" smooth duration={300}>
              S.
            </Link>
          </motion.div>

          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                spy
                smooth
                duration={300}
                className="relative text-base text-gray-300 hover:text-green-400 transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Mobile Header */}
      <header className="fixed w-full z-50 lg:hidden bg-gray-900/90 backdrop-blur-md shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold text-green-400">R.</div>
          {!isSidebarOpen && (
            <button
              onClick={handleSidebarToggle}
              className="p-2 rounded-md bg-gray-800 text-white menu-toggle"
              aria-label="Open menu"
            >
              <AiOutlineMenu className="w-6 h-6" />
            </button>
          )}
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleSidebarToggle}
              className="fixed inset-0 z-40 bg-black/50"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", ease: "easeInOut" }}
              className="fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 mobile-sidebar shadow-lg"
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-800">
                <div className="text-xl font-bold text-green-400">Menu</div>
                <button
                  onClick={handleSidebarToggle}
                  className="p-2 rounded-md text-gray-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <AiOutlineClose className="w-6 h-6" />
                </button>
              </div>

              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
                className="flex flex-col px-6 py-4 space-y-5"
              >
                {navItems.map((item) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    <Link
                      to={item.to}
                      smooth
                      duration={400}
                      onClick={handleSidebarToggle}
                      className="block text-base text-gray-300 hover:text-green-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
