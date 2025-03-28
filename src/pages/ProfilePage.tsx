
import React from 'react';
import { MessageSquare, ThumbsUp, Eye, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { posts, users } from '@/data/mockData';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get the current user's posts
  const userPosts = user ? posts.filter(post => post.authorId === user.id) : [];
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  
  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been logged out successfully"
    });
    navigate('/login');
  };
  
  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <Layout title="Profile">
      <div className="space-y-6">
        {/* Profile header */}
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-bold">{user.username}</h2>
            <p className="text-muted-foreground">Member since {formatDate(user.joinDate)}</p>
            <p className="text-sm mt-1 text-muted-foreground">
              <span className="font-medium text-foreground">{user.postCount}</span> posts
            </p>
            
            <div className="flex gap-2 mt-4 justify-center sm:justify-start">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
        
        {/* Tabs section */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          
          {/* Posts tab */}
          <TabsContent value="posts" className="space-y-4">
            {userPosts.length > 0 ? (
              userPosts.map((post) => (
                <div key={post.id} className="post-card">
                  <h3 className="font-medium mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {post.content}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-muted-foreground">
                      {formatDate(post.createdAt)}
                    </div>
                    <div className="flex gap-4">
                      <div className="post-action">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-xs">{post.likes}</span>
                      </div>
                      <div className="post-action">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-xs">{post.comments}</span>
                      </div>
                      <div className="post-action">
                        <Eye className="h-4 w-4" />
                        <span className="text-xs">{post.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">You haven't created any posts yet.</p>
                <Button className="mt-4">Create your first post</Button>
              </div>
            )}
          </TabsContent>
          
          {/* Activity tab */}
          <TabsContent value="activity">
            <div className="text-center py-8">
              <p className="text-muted-foreground">Your recent activity will appear here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProfilePage;
