"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/alumni', label: 'Alumni' },
    { path: '/rankings', label: 'Coding Rankings' },
    { path: '/placements', label: 'Companies Placed' },
    { path: '/resources', label: 'Resources' },
    { path: '/current-hiring', label: 'Current Hiring' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg shadow-black/20"
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="https://res.cloudinary.com/dpwqggym0/image/upload/v1740258428/efakvdgwdtiggzetbdby.png"
                alt="BBDITM Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-3xl font-bold text-white hover:text-gray-200 transition-colors duration-300">
                BBDITM
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                onHoverStart={() => setIsHovered(item.path)}
                onHoverEnd={() => setIsHovered(null)}
                className="relative"
              >
                <Link href={item.path}>
                  <motion.div
                    className={`px-5 py-3 rounded-xl text-[15px] font-medium relative overflow-hidden
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
                        className="absolute bottom-0 left-0 right-0 h-full bg-white/10 rounded-xl -z-10"
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
                className="px-6 py-3 rounded-xl text-[15px] font-medium bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300"
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