'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, Building, Calendar, FileText, 
  BriefcaseIcon, Settings, Bell, Search,
  PieChart, TrendingUp, Download, Filter,
  Plus, MoreVertical, ChevronDown, Menu,
  X, ChevronRight, ArrowUpRight
} from 'lucide-react';

export default function TNPAdminDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  
  const stats = [
    { label: "Total Students", value: "2,456", trend: "+12%", icon: Users },
    { label: "Companies Visited", value: "186", trend: "+8%", icon: Building },
    { label: "Placed Students", value: "1,890", trend: "+15%", icon: BriefcaseIcon },
    { label: "Avg. Package", value: "12.4 LPA", trend: "+20%", icon: TrendingUp }
  ];

  const recentPlacements = [
    { company: "Netflix", offers: 24, avgPackage: "25 LPA", status: "Completed", logo: "https://img.icons8.com/color/96/netflix.png" },
    { company: "Salesforce", offers: 18, avgPackage: "32 LPA", status: "Completed", logo: "https://img.icons8.com/color/96/salesforce.png" },
    { company: "Amazon", offers: 45, avgPackage: "20 LPA", status: "In Progress", logo: "https://img.icons8.com/color/96/amazon.png" }
  ];

  const sidebarVariants = {
    expanded: { width: "256px" },
    collapsed: { width: "80px" }
  };

  const menuItems = [
    { icon: PieChart, label: "Dashboard", id: "dashboard" },
    { icon: Users, label: "Students", id: "students" },
    { icon: Building, label: "Companies", id: "companies" },
    { icon: Calendar, label: "Placement Drives", id: "drives" },
    { icon: FileText, label: "Applications", id: "applications" },
    { icon: BriefcaseIcon, label: "Jobs", id: "jobs" },
    { icon: TrendingUp, label: "Analytics", id: "analytics" },
    { icon: Settings, label: "Settings", id: "settings" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex text-black">
      {/* Animated Sidebar */}
      <motion.nav
        variants={sidebarVariants}
        animate={isSidebarCollapsed ? "collapsed" : "expanded"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full bg-black text-white py-6 overflow-hidden"
      >
        <div className="px-6 mb-8 flex items-center justify-between">
          <motion.div
            animate={{ opacity: isSidebarCollapsed ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-xl font-bold">TNP Cell</h1>
            <p className="text-sm text-gray-400">Admin Dashboard</p>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
            className="p-2 hover:bg-gray-800 rounded-lg"
          >
            {isSidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
          </motion.button>
        </div>
        
        <div className="space-y-2 px-3">
          {menuItems.map(item => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg transition-colors ${
                activeSection === item.id ? 'bg-white text-black' : 'hover:bg-gray-800'
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <item.icon size={20} />
              <motion.span
                animate={{ opacity: isSidebarCollapsed ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.span>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Main Content */}
      <motion.div
        initial={false}
        animate={{ marginLeft: isSidebarCollapsed ? "80px" : "256px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1 p-8"
      >
        {/* Header */}
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome, Admin</h1>
            <p className="text-gray-600">Manage placement activities and track progress</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="text"
                placeholder="Search anything..."
                className="w-64 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </motion.div>
            
            <motion.button 
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white rounded-full text-xs flex items-center justify-center">
                5
              </span>
            </motion.button>
          </div>
        </motion.header>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-4 gap-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 cursor-pointer overflow-hidden relative"
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-black rounded-full"
                initial={{ opacity: 0.03 }}
                animate={{ 
                  opacity: hoveredStat === index ? 0.06 : 0.03,
                  scale: hoveredStat === index ? 1.2 : 1
                }}
                style={{ translateX: '30%', translateY: '-30%' }}
              />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-500 flex items-center space-x-2">
                  <stat.icon size={20} />
                  <span>{stat.label}</span>
                </h3>
                <motion.span 
                  className="text-green-500 text-sm flex items-center"
                  animate={{ scale: hoveredStat === index ? 1.1 : 1 }}
                >
                  {stat.trend}
                  <ArrowUpRight size={16} />
                </motion.span>
              </div>
              <p className="text-3xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Placements Section */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Placements</h2>
            <div className="flex items-center space-x-3">
              <motion.button 
                className="px-4 py-2 bg-gray-50 rounded-lg flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter size={18} />
                <span>Filter</span>
              </motion.button>
              <motion.button 
                className="px-4 py-2 bg-black text-white rounded-lg flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={18} />
                <span>Add New</span>
              </motion.button>
            </div>
          </div>
          <div className="space-y-4">
            {recentPlacements.map((placement, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg group"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden">
                    <img src={placement.logo} alt={placement.company} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">{placement.company}</h3>
                    <p className="text-sm text-gray-600">{placement.offers} offers • {placement.avgPackage}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    placement.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {placement.status}
                  </span>
                  <motion.button
                    className="opacity-0 group-hover:opacity-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div
          className="grid grid-cols-4 gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { label: "Schedule Drive", icon: Calendar, color: "bg-blue-50" },
            { label: "Add Company", icon: Building, color: "bg-green-50" },
            { label: "View Reports", icon: FileText, color: "bg-purple-50" },
            { label: "Student Database", icon: Users, color: "bg-orange-50" }
          ].map((action, index) => (
            <motion.button
              key={index}
              className={`${action.color} p-6 rounded-xl flex flex-col items-center justify-center space-y-3 hover:shadow-lg transition-shadow`}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <action.icon size={24} />
              <span className="font-medium">{action.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}