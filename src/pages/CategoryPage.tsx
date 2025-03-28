
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { MessageSquare, ThumbsUp, Eye } from 'lucide-react';
import Layout from '@/components/Layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { categories, posts, users } from '@/data/mockData';

const CategoryPage = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  // Get category details
  const category = categories.find(cat => cat.slug === categoryName);

  // Get posts for this category
  const { data: categoryPosts, isLoading } = useQuery({
    queryKey: ['category', categoryName],
    queryFn: () => new Promise(resolve => {
      setTimeout(() => {
        const filteredPosts = posts.filter(post => {
          const postCategory = categories.find(cat => cat.id === post.categoryId);
          return postCategory?.slug === categoryName;
        });
        resolve(filteredPosts);
      }, 500);
    }),
  });

  // Helper function to find author
  const getAuthor = (authorId: string) => {
    return users.find(user => user.id === authorId);
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

  if (!category) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-16">
          <h2 className="text-xl font-bold mb-4">Category not found</h2>
          <p className="text-muted-foreground">The category you are looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={category.name}>
      <div className="space-y-6">
        {/* Category description */}
        <div className="mb-6">
          <p className="text-muted-foreground mb-4">{category.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="text-sm">
                <span className="text-muted-foreground">Posts:</span> 
                <span className="font-medium ml-1">{category.postCount}</span>
              </div>
            </div>
            <Button>Create Post</Button>
          </div>
        </div>

        {/* Posts list */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Posts</h2>
          
          {isLoading ? (
            // Loading state
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
          ) : categoryPosts?.length > 0 ? (
            // Posts
            categoryPosts.map((post: any) => {
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
            // No posts
            <div className="text-center py-8">
              <p className="text-muted-foreground">No posts in this category yet.</p>
              <Button variant="outline" className="mt-4">Be the first to post</Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
