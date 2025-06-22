import React, { useState } from 'react';
import FilterGroup from './FilterGroup';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type DateFilter = 'Today' | 'Tomorrow' | 'This Weekend';

const SidebarFilters: React.FC<{ className?: string }> = ({ className }) => {
  const [activeDate, setActiveDate] = useState<DateFilter>('Today');

  const dateOptions: ReadonlyArray<DateFilter> = ['Today', 'Tomorrow', 'This Weekend'] as const;

  const handleClearDate = () => {
    setActiveDate('' as DateFilter); // In a real app, you might set it to a default or null state
  };

  return (
    <div className={cn("w-64", className)}>
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      
      <div className="flex flex-col">
        <FilterGroup title="Date" defaultOpen onClear={handleClearDate}>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {dateOptions.map((option) => (
                <Button
                  key={option}
                  variant="outline"
                  size="sm"
                  className={cn(
                    "rounded-md border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-primary font-normal",
                    activeDate === option && "border-primary text-primary bg-red-50/50"
                  )}
                  onClick={() => setActiveDate(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="date-range" className="border-gray-400 rounded-[2px]"/>
              <Label htmlFor="date-range" className="font-normal text-sm text-foreground">
                Date Range
              </Label>
            </div>
          </div>
        </FilterGroup>

        <FilterGroup title="Categories" onClear={() => console.log('Clear Categories')}>
          <p className="text-sm text-muted-foreground py-2">Category options would be listed here.</p>
        </FilterGroup>
        
        <FilterGroup title="More Filters" onClear={() => console.log('Clear More Filters')}>
           <p className="text-sm text-muted-foreground py-2">Additional filter options would be here.</p>
        </FilterGroup>

        <FilterGroup title="Price" onClear={() => console.log('Clear Price')}>
          <p className="text-sm text-muted-foreground py-2">A price range slider would be here.</p>
        </FilterGroup>
      </div>

      <Button variant="outline" className="w-full mt-6 border-primary text-primary hover:text-primary hover:bg-red-50/50">
        Browse by Venues
      </Button>
    </div>
  );
};

export default SidebarFilters;
