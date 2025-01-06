'use client';

import { Code, Cloud, Cog, Database, Globe } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code />,
      skills: ["Python", "JavaScript", "TypeScript", "Go", "C#", "C++", "SQL"]
    },
    {
      name: "Frameworks & Libraries",
      icon: <Globe />,
      skills: ["Svelte", "Vue.js", "React", "Node.js", "React Native", "Xamarin"]
    },
    {
      name: "Databases, Caching & Events",
      icon: <Database />,
      skills: ["PostgreSQL", "AWS Redshift", "DynamoDB", "MongoDB", "Redis", "Apache Kafka", "ZeroMQ"]
    },
    {
      name: "Cloud Providers",
      icon: <Cloud />,
      skills: ["AWS", "Digital Ocean"]
    },
    {
      name: "DevOps & Tools",
      icon: <Cog />,
      skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"]
    }
  ]

  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-[#1DB954]">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors">
            <div className="flex items-center mb-3">
              <span className="text-[#1DB954] mr-2">{category.icon}</span>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="bg-[#1DB954] text-black px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

