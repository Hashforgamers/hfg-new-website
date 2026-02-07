'use client';

import { useState } from 'react';
import Sidebar from '@/components/common/Sidebar';

import Footer from '@/components/FooterSection';
import AboutUsModal from '@/components/AboutUsModal';
import ContactUsModal from '@/components/ContactUsModal';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';

export default function AppShell({ children }) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        openAbout={() => setAboutOpen(true)}
        openContact={() => setContactOpen(true)}
        openPrivacy={() => setPrivacyOpen(true)}
      />

      {children}

      <Footer
        openAbout={() => setAboutOpen(true)}
        openContact={() => setContactOpen(true)}
        openPrivacy={() => setPrivacyOpen(true)}
      />

      <AboutUsModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ContactUsModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
