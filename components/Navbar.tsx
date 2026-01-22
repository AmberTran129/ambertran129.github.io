
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/60 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-6 flex justify-between items-baseline">
        <div className="flex flex-col">
          <a href="#" className="text-xl font-medium tracking-tighter text-[#181818]">
            Anh Tran
          </a>
        </div>
        
        <div className="flex gap-12 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
          <a href="#expertise" className="hover:text-[#181818] transition-colors">Expertise</a>
          <a href="#work" className="hover:text-[#181818] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#181818] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
