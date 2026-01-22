
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#FAFAFA] border-t border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold tracking-tight">Anh Tran</h3>
              <p className="text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-1">
                Product Owner | Business Analyst
              </p>
            </div>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Business-oriented professional with 6+ years delivering SaaS platforms. 
              Skilled at translating complex business requirements into elegant system configurations.
            </p>
          </div>

          <div className="md:text-right space-y-4">
            <div className="space-y-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</p>
              <p className="text-sm font-medium">anhtrangoctran129@gmail.com</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</p>
              <p className="text-sm font-medium">(+84) 358 270 404</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</p>
              <p className="text-sm font-medium">Ho Chi Minh City, Vietnam</p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Tran Thi Ngoc Anh. Built with React & Tailwind.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
