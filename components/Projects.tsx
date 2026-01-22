
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    { id: '1', name: 'CHORUS', role: 'Facility Management', company: 'CyberLogitec', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200' },
    { id: '2', name: 'CARIS', role: 'Accounting Module', company: 'CyberLogitec', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200' },
    { id: '3', name: 'iRides', role: 'Ride-Hailing Platform', company: 'FPT Software', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200' },
    { id: '4', name: 'Telecom', role: 'SaaS Platform', company: 'INFODATION', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200' },
    { id: '5', name: 'Fitness', role: 'Community Platform', company: 'Sportpartner', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200' },
    { id: '6', name: 'DEPDEP', role: 'Booking Portal', company: 'DEPDEP Vietnam', image: 'https://images.unsplash.com/photo-1454165833767-027ff33027ef?auto=format&fit=crop&q=80&w=1200' },
  ];

  return (
    <section id="work" className="py-40 bg-[#FAFAFA]">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16">
        <div className="mb-32">
          <span className="text-[11px] font-bold text-gray-400 tracking-[0.4em] uppercase block mb-6">Latest Projects</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#181818] leading-[0.9]">
            Solutions that <br /> transform businesses.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {projects.map((project, idx) => (
            <div key={project.id} className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}>
              <div className="relative overflow-hidden rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] mb-10 aspect-[16/10]">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Minimal Overlay Info */}
                <div className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-8">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-[#181818] mb-1">{project.role}</h3>
                  <p className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase">{project.company} / {project.name}</p>
                </div>
                <span className="text-[10px] font-bold text-gray-300">© 2025</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
