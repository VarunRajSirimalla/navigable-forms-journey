
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { categories, posts, users } from '@/data/mockData';

interface PostAuthor {
  id: string;
  name: string;
  avatar: string;
}

interface CategoryPost {
  id: string;
  title: string;
  content: string;
  author: PostAuthor;
  category: string;
  tags: string[];
  createdAt: string;
  likes: number;
  comments: number;
}

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [categoryPosts, setCategoryPosts] = useState<CategoryPost[]>([]);
  const [category, setCategory] = useState<any>(null);
  
  useEffect(() => {
    // Find the category
    const foundCategory = categories.find(cat => cat.slug === categoryName);
    setCategory(foundCategory);
    
    // Filter posts by category and map to the proper structure
    if (foundCategory) {
      const filteredPosts = posts
        .filter(post => post.categoryId === foundCategory.id)
        .map(post => {
          const author = users.find(user => user.id === post.authorId) || { 
            id: 'unknown',
            username: 'Unknown User',
            avatar: ''
          };
          
          return {
            id: post.id,
            title: post.title,
            content: post.content,
            author: {
              id: author.id,
              name: author.username,
              avatar: author.avatar || ''
            },
            category: foundCategory.name,
            tags: post.tags || [],
            createdAt: post.createdAt,
            likes: post.likes,
            comments: post.comments
          };
        });
        
      setCategoryPosts(filteredPosts);
    }
  }, [categoryName]);

  if (!category) {
    return (
      <Layout>
        <div className="p-4">Category not found</div>
      </Layout>
    );
  }

  return (
    <Layout showSidebar title={category.name}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Explore discussions about {category.name}
          </p>
        </div>
        <Button>New Post</Button>
      </div>
      
      <Tabs defaultValue="recent">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="recent" className="space-y-4">
          {categoryPosts && categoryPosts.length > 0 ? (
            categoryPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium leading-none">{post.title}</h3>
                    <div className="flex gap-1">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-secondary text-xs px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                </CardContent>
                <CardFooter className="border-t pt-2">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.likes} likes</span>
                      <span>•</span>
                      <span>{post.comments} comments</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No posts in this category yet</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="popular" className="space-y-4">
          <div className="text-center py-10">
            <p className="text-muted-foreground">Popular posts coming soon</p>
          </div>
        </TabsContent>
        <TabsContent value="unanswered" className="space-y-4">
          <div className="text-center py-10">
            <p className="text-muted-foreground">Unanswered posts coming soon</p>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default CategoryPage;
