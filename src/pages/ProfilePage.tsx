
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Settings, Mail } from 'lucide-react';

interface UserWithExtendedInfo {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  joinDate?: string;
  postCount?: number;
}

const ProfilePage: React.FC = () => {
  const { user: authUser, logout } = useAuth();
  const navigate = useNavigate();
  
  // Extended user info with mock data for display purposes
  const user: UserWithExtendedInfo = {
    ...authUser!,
    joinDate: new Date().toISOString(),
    postCount: 5
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-[calc(100vh-60px)]">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Not Logged In</CardTitle>
              <CardDescription>You need to log in to view your profile</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button onClick={() => navigate('/login')}>Go to Login</Button>
            </CardFooter>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showSidebar={false}>
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.username?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl">{user.username}</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1">
                  <Mail className="h-3 w-3" />
                  {user.email}
                </CardDescription>
                <CardDescription className="mt-1">
                  Joined {user.joinDate ? format(new Date(user.joinDate), 'MMMM yyyy') : 'Recently'}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex gap-4 items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Posts: {user.postCount || 0}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-1" /> Settings
                </Button>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-1" /> Logout
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="posts" className="flex-1">Posts</TabsTrigger>
            <TabsTrigger value="comments" className="flex-1">Comments</TabsTrigger>
            <TabsTrigger value="saved" className="flex-1">Saved</TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-6">
            <div className="text-center py-10">
              <p className="text-muted-foreground">No posts yet</p>
              <Button variant="outline" className="mt-4" onClick={() => navigate('/create-post')}>
                Create a Post
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="comments" className="mt-6">
            <div className="text-center py-10">
              <p className="text-muted-foreground">No comments yet</p>
            </div>
          </TabsContent>
          <TabsContent value="saved" className="mt-6">
            <div className="text-center py-10">
              <p className="text-muted-foreground">No saved posts yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProfilePage;
