import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronDown, Menu } from 'lucide-react';

const BookMyShowLogo: React.FC = () => (
    <a href="#" aria-label="BookMyShow Home">
        <svg width="130" height="32" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
            <path d="M11.5312 28C7.51562 28 4.35156 26.6094 2.03906 23.8281C-0.273438 21.0469 -0.273438 17.5156 2.03906 14.6875C4.35156 11.8594 7.51562 10.5 11.5312 10.5C13.6875 10.5 15.6562 11.0312 17.3906 12.1094L16.0312 14.5C14.625 13.5938 13.1719 13.125 11.5312 13.125C8.8125 13.125 6.79688 14.1562 5.53125 16.1719C4.26562 18.2344 4.26562 20.3438 5.53125 22.3594C6.79688 24.375 8.8125 25.375 11.5312 25.375C13.1719 25.375 14.625 24.9062 16.0312 24L17.3906 26.3906C15.6562 27.4688 13.6875 28 11.5312 28ZM29.9375 28C25.9219 28 22.7578 26.6094 20.4453 23.8281C18.1328 21.0469 18.1328 17.5156 20.4453 14.6875C22.7578 11.8594 25.9219 10.5 29.9375 10.5C32.0938 10.5 34.0625 11.0312 35.7969 12.1094L34.4375 14.5C33.0312 13.5938 31.5781 13.125 29.9375 13.125C27.2188 13.125 25.2031 14.1562 23.9375 16.1719C22.6719 18.2344 22.6719 20.3438 23.9375 22.3594C25.2031 24.375 27.2188 25.375 29.9375 25.375C31.5781 25.375 33.0312 24.9062 34.4375 24L35.7969 26.3906C34.0625 27.4688 32.0938 28 29.9375 28ZM48.3516 28C44.3359 28 41.1719 26.6094 38.8594 23.8281C36.5469 21.0469 36.5469 17.5156 38.8594 14.6875C41.1719 11.8594 44.3359 10.5 48.3516 10.5C52.3672 10.5 55.5312 11.8594 57.8438 14.6875C60.1562 17.5156 60.1562 21.0469 57.8438 23.8281C55.5312 26.6094 52.3672 28 48.3516 28ZM48.3516 25.375C51.0703 25.375 53.0859 24.375 54.3516 22.3594C55.6172 20.3438 55.6172 18.2344 54.3516 16.1719C53.0859 14.1562 51.0703 13.125 48.3516 13.125C45.6328 13.125 43.6172 14.1562 42.3516 16.1719C41.0859 18.2344 41.0859 20.3438 42.3516 22.3594C43.6172 24.375 45.6328 25.375 48.3516 25.375ZM77.1094 10.875H64.0781V27.625H66.6094V10.875H77.1094V8.25H64.0781V5.5H77.1094V2.875H61.5V30.25H66.6094V27.625H77.1094V30.25H79.6406V8.25H77.1094V10.875ZM93.4531 10.875H82.9219V27.625H85.4531V10.875H93.4531V8.25H80.3438V30.25H85.4531V27.625H95.9844V30.25H98.5156V8.25H95.9844V10.875H93.4531ZM110.156 10.875H102.125V18.125L108.312 10.875H111.969L105.188 18.8438L112.375 27.625H108.719L103.5 20.25L102.125 21.625V27.625H99.5938V8.25H102.125V10.875H110.156ZM124.969 10.875H116.938V18.125L123.125 10.875H126.781L120 18.8438L127.188 27.625H123.531L118.312 20.25L116.938 21.625V27.625H114.406V8.25H116.938V10.875H124.969Z" fill="currentColor"/>
        </svg>
    </a>
);

const Header: React.FC = () => {
  const mainNavLinks = ['Movies', 'Stream', 'Events', 'Plays', 'Sports', 'Activities'] as const;
  const secondaryNavLinks = ['ListYourShow', 'Corporates', 'Offers', 'Gift Cards'] as const;

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      {/* Top Bar */}
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex flex-1 items-center gap-6 md:gap-10">
          <BookMyShowLogo />
          <div className="relative hidden w-full max-w-md lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className="w-full rounded-md border-border bg-white pl-9 pr-4 py-2 text-sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium">
            Chennai
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm h-auto rounded">
            Sign in
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>
      
      {/* Bottom Bar (Nav links) */}
      <div className="border-t bg-secondary/30">
         <div className="container flex h-12 max-w-screen-2xl items-center justify-between px-4 md:px-6">
           <nav className="flex items-center gap-4 md:gap-6 text-sm">
             {mainNavLinks.map((link) => (
               <a
                 key={link}
                 href="#"
                 className={cn(
                    "text-foreground/80 hover:text-primary transition-colors font-medium",
                    link === 'Activities' && "text-primary font-semibold"
                 )}
               >
                 {link}
               </a>
             ))}
           </nav>
           <nav className="hidden md:flex items-center gap-4 md:gap-6 text-sm">
             {secondaryNavLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-foreground/80 hover:text-primary transition-colors text-xs font-normal"
                >
                  {link}
                </a>
              ))}
           </nav>
         </div>
      </div>
    </header>
  );
};

export default Header;
