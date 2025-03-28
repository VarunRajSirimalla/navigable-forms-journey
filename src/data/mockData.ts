
// Mock data for the forum application

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  category: string;
  createdAt: string;
  likes: number;
  comments: number;
  image?: string;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
  likes: number;
}

export const categories: Category[] = [
  { id: '1', name: 'Technology', slug: 'technology', count: 1024 },
  { id: '2', name: 'Science', slug: 'science', count: 896 },
  { id: '3', name: 'Politics', slug: 'politics', count: 752 },
  { id: '4', name: 'Health', slug: 'health', count: 621 },
  { id: '5', name: 'Entertainment', slug: 'entertainment', count: 588 },
  { id: '6', name: 'Sports', slug: 'sports', count: 476 },
  { id: '7', name: 'Business', slug: 'business', count: 443 },
];

export const trendingTopics: Category[] = [
  { id: 't1', name: '#Web3.0', slug: 'web3', count: 0 },
  { id: 't2', name: '#AI Ethics', slug: 'ai-ethics', count: 0 },
  { id: 't3', name: '#Climate Tech', slug: 'climate-tech', count: 0 },
  { id: 't4', name: '#Climate Change', slug: 'climate-change', count: 0 },
  { id: 't5', name: '#Cryptocurrency', slug: 'cryptocurrency', count: 0 },
];

export const posts: Post[] = [
  {
    id: '1',
    title: 'Tips for remote work productivity',
    description: 'My workspace is crucial to my productivity. After having a dedicated workspace and sticking to a routine makes a significant difference. What are your best remote work tips?',
    authorId: '101',
    authorName: 'Sarah Johnson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    category: 'technology',
    createdAt: '3 hours ago',
    likes: 124,
    comments: 31,
  },
  {
    id: '2',
    title: 'The future of AI in healthcare',
    description: 'AI is revolutionizing healthcare with improved diagnostic and personalized treatment plans. What other applications do you see emerging in the next decade?',
    authorId: '102',
    authorName: 'Dr. Michael Chen',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    category: 'health',
    createdAt: '5 hours ago',
    likes: 87,
    comments: 21,
  },
  {
    id: '3',
    title: "What's your favorite programming language and why?",
    description: "I've been using TypeScript for a while now and I'm loving it. The type safety is a game changer for larger projects. What about you?",
    authorId: '103',
    authorName: 'Alex Johnson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    category: 'technology',
    createdAt: '6 hours ago',
    likes: 154,
    comments: 32,
  },
  {
    id: '4',
    title: 'A lamp I printed for my wife',
    description: 'The only thing that went wrong is that I put the USB on the body when the base is on... But not if it's upside 🙃 anyway',
    authorId: '104',
    authorName: 'Chris Lee',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chris',
    category: 'technology',
    createdAt: '8 hours ago',
    likes: 178,
    comments: 22,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
  {
    id: '5',
    title: 'Planetary Science',
    description: 'A possible reason to always aim to look for signs of life.',
    authorId: '105',
    authorName: 'Ellen Gordon',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ellen',
    category: 'science',
    createdAt: '3 days ago',
    likes: 134,
    comments: 12,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
  },
  {
    id: '6',
    title: 'Biowearable',
    description: "SpaceX suit vs. NASA's Williams on spacewalk into space, okay",
    authorId: '106',
    authorName: 'Biowearer',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Biowearer',
    category: 'science',
    createdAt: '4 days ago',
    likes: 25,
    comments: 19,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
  },
  {
    id: '7',
    title: 'Healthcase',
    description: 'Florida scrifies with state infants from Medicare with pills to save them from organ donor',
    authorId: '107',
    authorName: 'Healthcase',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Healthcase',
    category: 'health',
    createdAt: '5 days ago',
    likes: 176,
    comments: 52,
    image: 'public/lovable-uploads/32804fe7-7862-4d0b-9f81-d5982c9a2a62.png',
  },
  {
    id: '8',
    title: 'Scipio MDI',
    description: 'Gingerbreast study shows that magnesium therapy increases anticancer factors in human blood. Results from a randomized clinical trial.',
    authorId: '108',
    authorName: 'Scipio MDI',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Scipio',
    category: 'health',
    createdAt: '6 days ago',
    likes: 181,
    comments: 38,
  },
  {
    id: '9',
    title: 'The race predictr',
    description: "I'm 99% sure he may not be president in 2028 — if/when Trump is re-elected, 'Onwhatsapp': Space",
    authorId: '109',
    authorName: 'Alex Martin',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexMartin',
    category: 'politics',
    createdAt: '4 days ago',
    likes: 140,
    comments: 53,
    image: 'public/lovable-uploads/45201c0f-b802-435f-8212-47f686486f1a.png',
  },
  {
    id: '10',
    title: 'American-news',
    description: 'Climate Change response exceeds United Nations expectations. Far-right rhetoric is defeated with idea talk of responsible citizenship. It's a healthy trope of individuals who are humantizing the civility.',
    authorId: '110',
    authorName: 'American-news',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=American',
    category: 'politics',
    createdAt: '7 days ago',
    likes: 92,
    comments: 53,
    image: 'public/lovable-uploads/a75f85c3-a793-4f92-baf2-c3bf15f30fd5.png',
  },
  {
    id: '11',
    title: 'Entertainment123',
    description: 'Jennifer Aniston Faces Backlash From Fans for "Snubbing" Mr.T',
    authorId: '111',
    authorName: 'Entertainment123',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Entertainment123',
    category: 'entertainment',
    createdAt: '1 week ago',
    likes: 178,
    comments: 73,
    image: 'public/lovable-uploads/135185ab-56d7-4c72-8f0c-a8c7f2aa7de3.png',
  },
  {
    id: '12',
    title: 'netflix_gossip_xo123',
    description: 'Jimmy Kimmel Sets Course to Host Job as Oscar Host, "Next Year They\'re Giving It To Jay Leno"',
    authorId: '112',
    authorName: 'netflix_gossip_xo123',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=netflix_gossip',
    category: 'entertainment',
    createdAt: '9 days ago',
    likes: 498,
    comments: 102,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
  {
    id: '13',
    title: 'The Bitcoin market will likely remain slow until sentiment in the U.S. improves.',
    description: 'Hedge fund managers are expecting an extended economic slowdown that could weigh on bitcoin. Fundamentals remain strong, with more mining top coming online and decreasing block time. Hash rate has been steadily climbing since summer mining halving occurrence. Level 1 forecast.',
    authorId: '113',
    authorName: 'Trade Journal',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TradeJournal',
    category: 'business',
    createdAt: '3 days ago',
    likes: 124,
    comments: 22,
    image: 'public/lovable-uploads/4365ee70-1baa-41d1-ac65-c9b5178b5907.png',
  },
  {
    id: '14',
    title: 'Oleg founder teams up with his former Reddit rival to buy and revive website',
    description: 'Content aggregation still matters, with the help of an unlikely partner. Reddit co-founder and chief Alexis Ohanian.',
    authorId: '114',
    authorName: 'Tech Insider',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TechInsider',
    category: 'business',
    createdAt: '8 days ago',
    likes: 143,
    comments: 13,
    image: 'public/lovable-uploads/f5d77a63-f8f9-4936-bed3-3802df35aa5e.png',
  },
  {
    id: '15',
    title: 'FIFA will consider expanding World Cup to 48 teams for 2030 tournament',
    description: 'Fifa is reportedly set to broaden support for 2030 FIFA World Cup Finals to 48 teams, an adjustment that would mean more than a quarter of its 211 member nations would compete.',
    authorId: '115',
    authorName: 'FootNews',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FootNews',
    category: 'sports',
    createdAt: '5 days ago',
    likes: 124,
    comments: 32,
    image: 'public/lovable-uploads/91891164-f4ca-444d-9b07-3e407b197292.png',
  },
  {
    id: '16',
    title: 'Players with the most runs in ICC finals',
    description: 'The ICC finals leaderboard is topped by legends. Virat Kohli heads it with 283 runs in finals, followed by Kane Williamson, Marlon Samuels, Kumar Sangakarra, Rohit Sharma, and others.',
    authorId: '116',
    authorName: 'CricketToday',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CricketToday',
    category: 'sports',
    createdAt: '6 days ago',
    likes: 142,
    comments: 53,
    image: 'public/lovable-uploads/91891164-f4ca-444d-9b07-3e407b197292.png',
  }
];

export const comments: Comment[] = [
  {
    id: 'c1',
    postId: '1',
    authorId: '201',
    authorName: 'Sarah Johnson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJ',
    content: 'I find that having a dedicated office space, following a regular schedule, and taking regular breaks helps maintain productivity.',
    createdAt: '2 hours ago',
    likes: 12
  },
  {
    id: 'c2',
    postId: '1',
    authorId: '202',
    authorName: 'David Miller',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidM',
    content: 'Setting clear boundaries between work and personal life has been crucial for me. I also recommend noise-cancelling headphones!',
    createdAt: '3 hours ago',
    likes: 8
  },
  {
    id: 'c3',
    postId: '1',
    authorId: '203',
    authorName: 'Emma Wilson',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaW',
    content: 'Regular video calls with teammates help me stay connected and motivated. Also, a good chair is worth the investment!',
    createdAt: '4 hours ago',
    likes: 15
  }
];

// Function to get posts by category
export const getPostsByCategory = (categorySlug: string): Post[] => {
  return posts.filter(post => post.category === categorySlug);
};

// Function to get post by id
export const getPostById = (postId: string): Post | undefined => {
  return posts.find(post => post.id === postId);
};

// Function to get comments by post id
export const getCommentsByPostId = (postId: string): Comment[] => {
  return comments.filter(comment => comment.postId === postId);
};
