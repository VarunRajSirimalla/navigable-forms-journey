
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ThumbsUp, Eye } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

import Layout from '@/components/Layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { posts, users, categories } from '@/data/mockData';

const Main = () => {
  // Simulate data fetching with react-query
  const { data: allPosts, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: () => new Promise(resolve => {
      setTimeout(() => {
        resolve(posts);
      }, 500);
    }),
    initialData: posts,
  });

  // Find author information
  const getAuthor = (authorId: string) => {
    return users.find(user => user.id === authorId);
  };

  // Find category information
  const getCategory = (categoryId: string) => {
    return categories.find(category => category.id === categoryId);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Layout title="Discover Discussions">
      <div className="space-y-6">
        {/* Featured section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {!isLoading ? (
              posts.slice(0, 2).map((post) => {
                const author = getAuthor(post.authorId);
                return (
                  <div key={post.id} className="border border-border bg-card rounded-lg p-5 hover:border-primary transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar>
                        <AvatarImage src={author?.avatar} />
                        <AvatarFallback>{author?.username?.charAt(0) || '?'}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium truncate">{post.title}</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <span>{author?.username}</span>
                          <span>•</span>
                          <span>{formatDate(post.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.content}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-xs">{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MessageSquare className="h-4 w-4" />
                          <span className="text-xs">{post.comments}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Eye className="h-4 w-4" />
                          <span className="text-xs">{post.views}</span>
                        </div>
                      </div>
                      <Link to={`/category/${getCategory(post.categoryId)?.slug}`} className="text-xs bg-secondary px-2 py-1 rounded-full">
                        {getCategory(post.categoryId)?.name}
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <div className="border border-border bg-card rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                  <Skeleton className="h-12 w-full mb-3" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
                <div className="border border-border bg-card rounded-lg p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-48" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                  <Skeleton className="h-12 w-full mb-3" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Main tabs section */}
        <div>
          <Tabs defaultValue="latest" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="top">Top</TabsTrigger>
              </TabsList>
              <Button size="sm" asChild>
                <Link to="/create-post">Create Post</Link>
              </Button>
            </div>

            <TabsContent value="latest" className="space-y-4">
              {!isLoading ? (
                posts.map((post) => {
                  const author = getAuthor(post.authorId);
                  return (
                    <div key={post.id} className="post-card">
                      <div className="post-header">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={author?.avatar} />
                          <AvatarFallback>{author?.username?.charAt(0) || '?'}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{post.title}</h3>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <span>{author?.username}</span>
                            <span>•</span>
                            <span>{formatDate(post.createdAt)}</span>
                            <span>•</span>
                            <Link to={`/category/${getCategory(post.categoryId)?.slug}`} className="hover:text-primary">
                              {getCategory(post.categoryId)?.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{post.content}</p>
                      <div className="post-footer">
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
                  );
                })
              ) : (
                Array(3).fill(null).map((_, index) => (
                  <div key={index} className="post-card">
                    <div className="flex items-start gap-3 mb-3">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-48" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                    <Skeleton className="h-10 w-full mb-3" />
                    <div className="flex gap-4">
                      <Skeleton className="h-4 w-12" />
                      <Skeleton className="h-4 w-12" />
                      <Skeleton className="h-4 w-12" />
                    </div>
                  </div>
                ))
              )}
            </TabsContent>

            <TabsContent value="trending" className="space-y-4">
              {/* Similar structure to "latest" but with different sorting */}
              <p className="text-center text-muted-foreground py-8">Trending posts will appear here</p>
            </TabsContent>

            <TabsContent value="top" className="space-y-4">
              {/* Similar structure to "latest" but with different sorting */}
              <p className="text-center text-muted-foreground py-8">Top posts will appear here</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
