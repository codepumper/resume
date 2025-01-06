'use client';

import { PlayCircle } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-[#1DB954]">Experience</h2>
      <div className="space-y-6">
        <ExperienceItem 
          title="Senior Software Engineer"
          company="Stats Perform"
          date="July 2023 - Present"
          description="A bit of this and a bit of that..."
        />
        <ExperienceItem 
          title="Senior Software Engineer"
          company="Stats Perform"
          date="July 2023 - Present"
          description="A bit of this and a bit of that..."
        />
        <ExperienceItem 
          title="Senior Software Engineer"
          company="Stats Perform"
          date="July 2023 - Present"
          description="A bit of this and a bit of that..."
        />
      </div>
    </section>
  )
}

function ExperienceItem({ title, company, date, description }) {
  return (
    <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors">
      <div className="flex items-center mb-2">
        <PlayCircle className="text-[#1DB954] mr-2" size={20} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-[#1DB954] mb-1">{company}</p>
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

