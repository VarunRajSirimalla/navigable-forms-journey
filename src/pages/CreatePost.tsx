
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { categories } from '@/data/mockData';

const CreatePost: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Post created",
      description: "Your post has been created successfully!"
    });
    navigate('/');
  };
  
  if (!user) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-[calc(100vh-60px)]">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Not Logged In</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">You need to be logged in to create a post.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={() => navigate('/login')}>Go to Login</Button>
            </CardFooter>
          </Card>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout title="Create New Post">
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Create a new post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="title" className="text-sm font-medium">Title</label>
              <Input id="title" placeholder="Enter post title" required />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="category" className="text-sm font-medium">Category</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="content" className="text-sm font-medium">Content</label>
              <Textarea id="content" placeholder="Write your post content here..." className="min-h-[200px]" required />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="tags" className="text-sm font-medium">Tags (comma separated)</label>
              <Input id="tags" placeholder="e.g. programming, help, question" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => navigate('/')}>Cancel</Button>
            <Button type="submit">Publish Post</Button>
          </CardFooter>
        </form>
      </Card>
    </Layout>
  );
};

export default CreatePost;
