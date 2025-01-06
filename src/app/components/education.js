'use client';

import { GraduationCap } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-[#1DB954]">Education</h2>
      <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors">
        <div className="flex items-center mb-2">
          <GraduationCap className="text-[#1DB954] mr-2" size={20} />
          <h3 className="text-xl font-semibold">Bachelor of Science in Statistics</h3>
        </div>
        <p className="text-[#1DB954] mb-1">University of Vienna</p>
        <p className="text-sm text-gray-400">2018 - 2024</p>
      </div>
    </section>
  )
}

