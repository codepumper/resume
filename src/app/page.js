'use client';

import { SpotifyCVLayout } from './components/spotify-cv-layout'
import { PersonalInfo } from './components/personal-info'
import { Experience } from './components/experience'
import { Skills } from './components/skills'
import { Education } from './components/education'

export default function SpotifyCV() {
  return (
    
    <SpotifyCVLayout>
      <PersonalInfo />
      <Experience />
      <Skills />
      <Education />
    </SpotifyCVLayout>
  )
}