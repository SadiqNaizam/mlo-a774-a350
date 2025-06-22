import React from 'react';
import ActivityCard, { Activity } from './ActivityCard';

const activitiesData: Activity[] = [
  {
    id: '1',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00311752-umylrxtggr-portrait.jpg',
    title: 'VGP Wonder World Chennai',
    venue: 'VGP Wonder World: Chennai',
    category: 'Amusement Parks',
    date: 'Sun, 22 Jun onwards',
    isPromoted: true,
  },
  {
    id: '2',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00398835-gxybgwmuwm-portrait.jpg',
    title: 'Ideal Beach Resort Day Outing',
    venue: 'Ideal Beach Resort: Chennai',
    category: 'Resorts',
    date: 'Mon, 23 Jun onwards',
    isPromoted: true,
  },
  {
    id: '3',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00389222-rwxzhmkhpf-portrait.jpg',
    title: 'Casagrand Sundance',
    venue: 'Casagrand Suncity: Chennai',
    category: 'Theme parks',
    date: 'Sun, 22 Jun onwards',
    isPromoted: false,
  },
  {
    id: '4',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00311752-axahbwzjeb-portrait.jpg',
    title: 'VGP Marine Kingdom - Chennai',
    venue: 'VGP Marine Kingdom: Chennai',
    category: 'Aquariums',
    date: 'Sun, 22 Jun onwards',
    isPromoted: false,
  },
  {
    id: '5',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00311752-axahbwzjeb-portrait.jpg',
    title: 'VGP Marine Kingdom - Chennai',
    venue: 'VGP Marine Kingdom: Chennai',
    category: 'Aquariums',
    date: 'Sun, 22 Jun onwards',
    isPromoted: false,
  },
  {
    id: '6',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00389222-rwxzhmkhpf-portrait.jpg',
    title: 'Casagrand Sundance',
    venue: 'Casagrand Suncity: Chennai',
    category: 'Theme parks',
    date: 'Sun, 22 Jun onwards',
    isPromoted: false,
  },
  {
    id: '7',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00398835-gxybgwmuwm-portrait.jpg',
    title: 'Ideal Beach Resort Day Outing',
    venue: 'Ideal Beach Resort: Chennai',
    category: 'Resorts',
    date: 'Mon, 23 Jun onwards',
    isPromoted: true,
  },
  {
    id: '8',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00311752-umylrxtggr-portrait.jpg',
    title: 'VGP Wonder World Chennai',
    venue: 'VGP Wonder World: Chennai',
    category: 'Amusement Parks',
    date: 'Sun, 22 Jun onwards',
    isPromoted: true,
  },
];

const ActivityCardGrid: React.FC = () => {
  if (!activitiesData || activitiesData.length === 0) {
    return <p className="text-center text-muted-foreground">No activities found.</p>;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
      {activitiesData.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivityCardGrid;
