import React from 'react';
import SidebarFilters from '../Filters/SidebarFilters';

const Sidebar: React.FC = () => {
  // This component acts as a structural container for the sidebar content.
  // The page's main layout (flex or grid) will place this aside correctly.
  // It's hidden on smaller screens and appears on 'lg' and larger breakpoints.
  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block" aria-label="Filters Sidebar">
      {/* 
        Sticky container for the filters, allowing independent scrolling from the main content.
        The 'top' value (8rem / 128px) should roughly match the height of the sticky header to prevent overlap.
      */}
      <div className="sticky top-32 h-[calc(100vh-8rem)] overflow-y-auto pr-4">
        <SidebarFilters />
      </div>
    </aside>
  );
};

export default Sidebar;
