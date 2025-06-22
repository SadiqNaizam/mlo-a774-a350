import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import MainContent from '@/components/layout/MainContent';
import Sidebar from '@/components/layout/Sidebar';

/**
 * The main page component for the "Activities Overview".
 * It assembles the primary layout components: a sticky header, a filter sidebar,
 * and the main content area to display the activities.
 * This structure is responsive, hiding the sidebar on larger breakpoints.
 */
const IndexPage: React.FC = () => {
  useEffect(() => {
    // Apply the dark theme when this component mounts
    const root = window.document.documentElement;
    root.classList.add('dark');

    // Optional: cleanup on unmount
    return () => {
      root.classList.remove('dark');
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <div className="container mx-auto flex max-w-screen-2xl flex-row items-start px-4 md:px-6">
        {/* Sidebar is visible on large screens and handles its own spacing and stickiness */}
        <Sidebar />
        {/* MainContent takes the remaining space and handles its internal padding */}
        <MainContent />
      </div>
    </div>
  );
};

export default IndexPage;