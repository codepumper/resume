'use client'; // Required if using React server components in Next.js

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function PersonalInfo() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <section id="home" className="mb-12">
      <h2 className="text-4xl font-bold mb-4 text-[#1DB954]">Robert Kovacs</h2>
      <h3 className="text-2xl mb-4">Full-Stack Software Engineer</h3>
      <div className="space-y-2 text-gray-300">
        {/* Email */}
        <p
          className="flex items-center cursor-pointer"
          onClick={() => setShowEmail(!showEmail)}
          title={showEmail ? 'Hide Email' : 'Reveal Email'}
        >
          <Mail className="mr-2" size={18} />
          {showEmail ? 'roberts.kovacs@gmail.com' : 'Click to reveal'}
        </p>

        {/* Phone */}
        <p
          className="flex items-center cursor-pointer"
          onClick={() => setShowPhone(!showPhone)}
          title={showPhone ? 'Hide Phone' : 'Reveal Phone'}
        >
          <Phone className="mr-2" size={18} />
          {showPhone ? '+43 660 220 53 08' : 'Click to reveal'}
        </p>

        {/* Address */}
        <p className="flex items-center"><MapPin className="mr-2" size={18} /> Vienna, Austria</p>
      </div>
    </section>
  );
}
