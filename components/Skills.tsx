
import React from 'react';

const Skills: React.FC = () => {
  const expertises = [
    {
      title: "Product Management",
      desc: "End-to-end roadmap strategy, INVEST-criteria user stories, and stakeholder orchestration for high-scale SaaS.",
      tags: ["Roadmapping", "Backlog Grooming", "SaaS"]
    },
    {
      title: "Agile Delivery",
      desc: "Expertise in sprint orchestration, requirement workshops, and cross-functional team leadership via Jira/Confluence.",
      tags: ["Sprint Planning", "Jira", "Stakeholders"]
    },
    {
      title: "Technical Analysis",
      desc: "Deep integration analysis involving REST/GraphQL APIs and complex database modeling for ERP systems.",
      tags: ["API Design", "Data Modeling", "BPMN"]
    }
  ];

  return (
    <section id="expertise" className="py-40 bg-white">
      <div className="max-w-screen-xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 border-b border-gray-100 pb-12 gap-8">
          <div className="max-w-xl">
            <span className="text-[11px] font-bold text-gray-400 tracking-[0.4em] uppercase block mb-6">Expertise</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#181818]">Strategic Solutions.</h2>
          </div>
          <p className="text-gray-400 font-light text-lg italic max-w-sm">
            Focusing on the intersection of business strategy and technical feasibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {expertises.map((item, idx) => (
            <div key={idx} className="group flex flex-col space-y-8">
              <div className="text-4xl font-light text-gray-100 group-hover:text-[#181818] transition-colors duration-500">
                0{idx + 1}
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 bg-gray-50 text-gray-400 rounded-full border border-gray-100 group-hover:border-gray-200 group-hover:text-gray-600 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
