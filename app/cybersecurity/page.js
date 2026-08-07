import React from 'react'
import UnderConstraction from '../consultancy/usa/UnderConstraction'
import CyberHero from '@/components/cybersicurity/CyberHero'
import CyberSearch from '@/components/cybersicurity/CyberSearch';
import TopicSection from '@/components/cybersicurity/TopicSection';

export const metadata = {
  title: "Cybersecurity Learning Hub",
  description:
    "Learn cybersecurity concepts, practical defensive techniques, security tools, and the latest cybersecurity news.",
};

export default function page() {
  return (
    <main>
        <UnderConstraction />
        <CyberHero />

        <div className="cyber-container">
          <CyberSearch />
          
        </div>
    </main>
  )
}
