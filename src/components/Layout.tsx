
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Menu, LogIn, PenSquare, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SidebarCategories from './SidebarCategories';
import { useAuth } from '@/contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true, title }) => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border h-14 flex items-center justify-between px-4">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1">
              <div className="bg-primary w-2 h-2 rounded-full"></div>
              <span className="text-lg font-semibold">ForumHub</span>
            </Link>
            <nav className="flex space-x-4">
              <Link to="/" className="text-sm hover:text-primary">Home</Link>
              <Link to="/category/technology" className="text-sm hover:text-primary">Categories</Link>
              <Link to="/" className="text-sm hover:text-primary">Trending</Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="relative max-w-[240px] hidden md:block">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts, users or topics..."
                className="pl-8 h-9 md:w-[200px] lg:w-[300px] bg-secondary"
              />
            </div>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="default" onClick={() => navigate('/create-post')}>
                  <PenSquare className="h-4 w-4 mr-1" />
                  Post
                </Button>
                <Avatar 
                  className="cursor-pointer" 
                  onClick={() => navigate('/profile')}
                >
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback>{user?.username?.charAt(0) || 'U'}</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate('/login')}
                  className="hidden sm:flex"
                >
                  Login
                </Button>
                <Button
                  size="sm"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </Button>
              </div>
            )}
            <Button size="icon" variant="ghost" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Main layout with optional sidebar */}
        <div className="flex-1 flex">
          {/* Sidebar */}
          {showSidebar && (
            <div className="w-64 border-r border-border p-4 hidden md:block">
              <SidebarCategories />
            </div>
          )}
          
          {/* Main content */}
          <div className="flex-1 p-4 md:p-6">
            {title && <h1 className="text-2xl font-bold mb-6">{title}</h1>}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
