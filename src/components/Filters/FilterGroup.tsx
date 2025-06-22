import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FilterGroupProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  onClear: () => void;
}

const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  children,
  className,
  defaultOpen = false,
  onClear,
}) => {
  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClear();
  };

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen ? "item-1" : undefined}
      className={cn("w-full", className)}
    >
      <AccordionItem value="item-1" className="border-b">
        <AccordionTrigger className="py-3 text-base font-normal text-foreground hover:no-underline data-[state=open]:text-primary data-[state=open]:font-semibold [&>svg]:data-[state=open]:text-primary">
          <div className="flex w-full items-center justify-between pr-2">
            <span>{title}</span>
            <Button
              variant="link"
              className="p-0 text-xs font-normal text-muted-foreground hover:text-primary hover:no-underline"
              onClick={handleClear}
            >
              Clear
            </Button>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-2 pb-4">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FilterGroup;
