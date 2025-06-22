import React from 'react';
import { Button } from '@/components/ui/button';
import ActivityCardGrid from '../Activities/ActivityCardGrid';

const MainContent: React.FC = () => {
  const categoryFilters = [
    'Amusement Parks',
    'Tourist Attractions',
    'Gaming',
    'Adventure',
    'Nightlife',
    'Food and Drinks',
    'Parties',
    'Unique Tours',
  ] as const;

  return (
    <main className="flex-1 min-w-0 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Activities In Chennai</h1>
      </div>

      <div className="flex items-center flex-wrap gap-3 mb-8">
        {categoryFilters.map((category) => (
          <Button
            key={category}
            variant="outline"
            className="rounded-full bg-white text-foreground/80 border-border hover:border-primary hover:text-primary hover:bg-red-50/50 font-normal"
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>
      
      <ActivityCardGrid />
    </main>
  );
};

export default MainContent;
