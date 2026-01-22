
import React from 'react';

const Hero: React.FC = () => {
  // Atmospheric video loop for high-end aesthetic
  const videoSource = "https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-curves-of-white-smoke-27663-large.mp4";
  
  // High-quality professional profile placeholder
  const profilePhoto = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAFA] pt-24">
      {/* Background Video Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-[0.05] grayscale"
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/0 via-[#FAFAFA]/50 to-[#FAFAFA]"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-8 md:px-16 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <span className="inline-block text-[11px] font-bold tracking-[0.4em] uppercase text-gray-400 mb-8">
              Product Owner & Business Analyst
            </span>
            <h1 className="text-6xl md:text-[100px] font-bold tracking-[-0.05em] leading-[0.9] text-[#181818] mb-12">
              Building <br />
              Future-Proof <br />
              Products.
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-xl font-light leading-relaxed mb-12">
              Based in Vietnam, I specialize in <span className="text-[#181818]">SaaS & ERP solutions</span> for logistics and telecom. Over 6 years of turning complex business needs into seamless digital experiences.
            </p>
            
            <div className="flex items-center gap-10">
              <a href="#work" className="px-10 py-5 bg-[#181818] text-white text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-gray-800 transition-all transform hover:-translate-y-1">
                Explore Work
              </a>
              <div className="hidden md:flex gap-6 opacity-30 grayscale hover:grayscale-0 transition-all">
                {['CyberLogitec', 'FPT', 'INFODATION'].map(name => (
                  <span key={name} className="text-[10px] font-bold tracking-widest uppercase">{name}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] transition-transform duration-700 hover:scale-[1.01]">
              <img 
                src={profilePhoto} 
                alt="Anh Tran Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl"></div>
            </div>
            {/* Minimal Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl p-4 border border-gray-100">
               <div className="text-center">
                 <p className="text-2xl font-bold tracking-tighter text-[#181818]">06+</p>
                 <p className="text-[8px] font-bold tracking-widest uppercase text-gray-400">Years Exp</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
