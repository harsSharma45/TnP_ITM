"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/alumni', label: 'Alumni' },
    { path: '/rankings', label: 'Coding Rankings' },
    { path: '/reviews', label: 'Companies Placed' },
    { path: '/resources', label: 'Resources' },
    { path: '/current-hiring', label: 'Current Hiring' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                BBDNITM
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                onHoverStart={() => setIsHovered(item.path)}
                onHoverEnd={() => setIsHovered(null)}
                className="relative"
              >
                <Link href={item.path}>
                  <motion.div
                    className={`px-4 py-2 rounded-lg text-sm font-medium relative overflow-hidden
                      ${isActive(item.path) 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                      }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.label}
                    {(isHovered === item.path || isActive(item.path)) && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/20 transition-shadow"
              >
                Login
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu - Add if needed */}
    </motion.header>
  );
}