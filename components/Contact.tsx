
import React from 'react';

const Contact: React.FC = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1kVezxnoBUwEFfsrU4cPr0XchYGzDNOQX';
    link.download = 'TranThiNgocAnh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-40 bg-white">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <span className="text-[11px] font-bold text-gray-400 tracking-[0.5em] uppercase block">Let's Work Together</span>
          <h2 className="text-5xl md:text-[110px] font-bold tracking-tighter text-[#181818] leading-[0.85]">
            Have an idea? <br />
            Let’s build it.
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new Product Owner or Business Analyst opportunities within SaaS, logistics, and fintech sectors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a 
              href="mailto:anhtrangoctran129@gmail.com" 
              className="px-12 py-6 bg-[#181818] text-white text-[11px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-gray-800 transition-all transform hover:-translate-y-1 w-full sm:w-auto shadow-2xl shadow-black/20"
            >
              Send Message
            </a>
            <button 
              onClick={downloadResume}
              className="px-12 py-6 border border-gray-200 text-[#181818] text-[11px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-gray-50 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Download Resume
            </button>
          </div>

          <div className="pt-32 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-gray-100">
            <div className="flex flex-col items-start space-y-2">
              <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Connect</p>
              <div className="flex gap-10">
                <a href="https://www.instagram.com/anssamy__/" target="_blank" className="text-[11px] font-bold tracking-widest text-gray-400 hover:text-black transition-colors uppercase">Instagram</a>
                <a href="https://www.linkedin.com/in/tran-ngocanh" target="_blank" className="text-[11px] font-bold tracking-widest text-gray-400 hover:text-black transition-colors uppercase">LinkedIn</a>
                <a href="https://immense-eoraptor-e48.notion.site/HOMEPAGE-20a0819cea93809bb844e954bcee10fa" target="_blank" className="text-[11px] font-bold tracking-widest text-gray-400 hover:text-black transition-colors uppercase">Notion Blog</a>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end space-y-2">
              <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Location</p>
              <p className="text-[11px] font-bold tracking-widest text-gray-800 uppercase">Ho Chi Minh City, VN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
