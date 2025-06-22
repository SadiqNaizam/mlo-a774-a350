import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface Activity {
  id: string;
  imageUrl: string;
  title: string;
  venue: string;
  category: string;
  date: string;
  isPromoted: boolean;
}

interface ActivityCardProps {
  activity: Activity;
  className?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, className }) => {
  return (
    <div className={cn("w-full group", className)}>
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={activity.imageUrl} 
          alt={activity.title} 
          className="w-full h-auto aspect-[2/3] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {activity.isPromoted && (
          <Badge variant="default" className="absolute top-3 left-3 bg-primary text-primary-foreground border-none text-xs font-bold py-1 px-2 uppercase">
            Promoted
          </Badge>
        )}
        <div className="absolute bottom-0 left-0 w-full p-3 bg-black/60">
          <p className="text-white text-sm font-semibold">{activity.date}</p>
        </div>
      </div>
      <div className="pt-3 space-y-0.5">
        <h3 className="font-bold text-base text-foreground truncate">{activity.title}</h3>
        <p className="text-sm text-muted-foreground truncate">{activity.venue}</p>
        <p className="text-sm text-muted-foreground">{activity.category}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
