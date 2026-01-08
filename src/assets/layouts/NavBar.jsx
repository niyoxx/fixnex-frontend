import React from 'react'

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent">
            Fixnex
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-green-500 transition-all duration-300 font-medium">Home</a>
            <a href="#tools" className="text-gray-600 hover:text-green-500 transition-all duration-300 font-medium">Calculator</a>
            <a href="#about" className="text-gray-600 hover:text-green-500 transition-all duration-300 font-medium">About</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar