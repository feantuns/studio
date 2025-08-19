import Link from 'next/link';
import { BookOpen, GraduationCap, Award, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from './theme-toggle';

const NavLinks = ({ className }: { className?: string }) => (
  <>
    <Link
      href="/"
      className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
    >
      <BookOpen className="h-5 w-5" />
      Courses
    </Link>
    <Link
      href="/my-courses"
      className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
    >
      <GraduationCap className="h-5 w-5" />
      My Courses
    </Link>
    <Link
      href="/my-certificates"
      className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
    >
      <Award className="h-5 w-5" />
      My Certificates
    </Link>
  </>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative h-10 w-10 rounded-full">
        <Avatar className="h-10 w-10 border-2 border-primary">
          <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="person" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56" align="end" forceMount>
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">Alex Doe</p>
          <p className="text-xs leading-none text-muted-foreground">
            alex.doe@example.com
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link href="/account" className="w-full">
          Account
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href="/login" className="w-full">
          Log Out
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline">Academystream</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLinks />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:block">
            <UserMenu />
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-3/4 sm:w-1/2">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg font-headline">Academystream</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    <NavLinks />
                     <div className="md:hidden mt-4 border-t pt-4">
                        <UserMenu />
                     </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
