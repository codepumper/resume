'use client';

import { useEffect, useState } from 'react';
import { Home, Briefcase, GraduationCap, Code } from 'lucide-react';
import Link from 'next/link';

export function Sidebar() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.9 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="w-64 bg-black sticky top-0 h-screen p-6">
      <nav>
        <ul className="space-y-4">
            <img 
              className="rounded-full w-25 h-25" 
              src="https://avatars.githubusercontent.com/u/19787665?v=4" 
              alt="Avatar"
            />

          <NavItem
            icon={<Home />}
            label="Home"
            href="#home"
            isActive={activeSection === 'home'}
          />
          <NavItem
            icon={<Briefcase />}
            label="Experience"
            href="#experience"
            isActive={activeSection === 'experience'}
          />
          <NavItem
            icon={<Code />}
            label="Skills"
            href="#skills"
            isActive={activeSection === 'skills'}
          />
          <NavItem
            icon={<GraduationCap />}
            label="Education"
            href="#education"
            isActive={activeSection === 'education'}
          />
        </ul>
      </nav>
    </aside>
  );
}

function NavItem({ icon, label, href, isActive }) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center transition-colors ${
          isActive ? 'text-[#1DB954]' : 'text-gray-300'
        } hover:text-white`}
      >
        <span className="mr-4">{icon}</span>
        {label}
      </Link>
    </li>
  );
}
