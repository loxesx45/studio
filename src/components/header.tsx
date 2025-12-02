'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, Search, ShoppingBasket, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderNavLinks = (isMobileLayout: boolean = false) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'font-medium transition-colors hover:text-primary',
          pathname === link.href ? 'text-primary' : 'text-muted-foreground',
          isMobileLayout ? 'block py-2 text-lg' : 'text-sm'
        )}
        onClick={() => isMobileLayout && setMobileMenuOpen(false)}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold font-headline text-lg">
          <ShoppingBasket className="h-6 w-6 text-primary" />
          Sivam Supermarket
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:w-3/4">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="/" className="flex items-center gap-2 font-bold font-headline text-lg" onClick={() => setMobileMenuOpen(false)}>
                        <ShoppingBasket className="h-6 w-6 text-primary" />
                        <span>Sivam Market</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex-1 flex flex-col gap-4 p-4">
                    {renderNavLinks(true)}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <>
            <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm">
              {renderNavLinks()}
            </nav>
            <div className="flex items-center gap-4">
              <div className="relative w-48">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full rounded-full"
                  disabled
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              <ThemeToggle />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
