
export interface User {
  id: string;
  username: string;
  avatar?: string;
  joinDate: string;
  postCount: number;
  role: "admin" | "moderator" | "user";
}

export interface Category {
  id: string;
  name: string;
  description: string;
  iconName: string;
  postCount: number;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  categoryId: string;
  createdAt: string;
  updatedAt?: string;
  likes: number;
  comments: number;
  views: number;
  tags: string[];
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
  postId: string;
  createdAt: string;
  updatedAt?: string;
  likes: number;
}

export const users: User[] = [
  {
    id: "user1",
    username: "johndoe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    joinDate: "2022-06-15",
    postCount: 24,
    role: "admin"
  },
  {
    id: "user2",
    username: "janedoe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    joinDate: "2022-07-21",
    postCount: 18,
    role: "moderator"
  },
  {
    id: "user3",
    username: "mikebrown",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    joinDate: "2023-01-05",
    postCount: 7,
    role: "user"
  },
  {
    id: "user4",
    username: "sarahsmith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    joinDate: "2023-02-12",
    postCount: 10,
    role: "user"
  }
];

export const categories: Category[] = [
  {
    id: "cat1",
    name: "Technology",
    description: "Discussions about the latest tech trends, gadgets, and programming",
    iconName: "Laptop",
    postCount: 125,
    slug: "technology"
  },
  {
    id: "cat2",
    name: "Gaming",
    description: "Everything about video games, consoles, and gaming communities",
    iconName: "Gamepad",
    postCount: 98,
    slug: "gaming"
  },
  {
    id: "cat3",
    name: "Sports",
    description: "Sports news, events, and discussions",
    iconName: "Trophy",
    postCount: 74,
    slug: "sports"
  },
  {
    id: "cat4",
    name: "Movies & TV",
    description: "Discussions about movies, TV shows, and entertainment",
    iconName: "Film",
    postCount: 87,
    slug: "movies-tv"
  },
  {
    id: "cat5",
    name: "Music",
    description: "Share your music interests and discover new artists",
    iconName: "Music",
    postCount: 63,
    slug: "music"
  },
  {
    id: "cat6",
    name: "Science",
    description: "Scientific discoveries, research, and discussions",
    iconName: "Microscope",
    postCount: 42,
    slug: "science"
  },
  {
    id: "cat7",
    name: "Art & Design",
    description: "Showcase your artwork and discuss design principles",
    iconName: "Palette",
    postCount: 56,
    slug: "art-design"
  }
];

export const posts: Post[] = [
  {
    id: "post1",
    title: "The future of AI in everyday applications",
    content: "Artificial intelligence is rapidly evolving and finding its way into our daily lives. From smart assistants to recommendation systems, AI is changing how we interact with technology. What are your thoughts on the future of AI in consumer applications?",
    authorId: "user1",
    categoryId: "cat1",
    createdAt: "2023-08-15T14:23:00Z",
    likes: 42,
    comments: 18,
    views: 256,
    tags: ["AI", "technology", "future"]
  },
  {
    id: "post2",
    title: "Best open-world games of 2023",
    content: "Open-world games have been dominating the gaming industry lately. Let's discuss some of the best titles released this year and what makes them stand out from the competition.",
    authorId: "user2",
    categoryId: "cat2",
    createdAt: "2023-08-10T09:15:00Z",
    likes: 38,
    comments: 24,
    views: 312,
    tags: ["gaming", "open-world", "2023"]
  },
  {
    id: "post3",
    title: "The rise of streaming platforms and the future of TV",
    content: "Streaming platforms have revolutionized how we consume media. From Netflix to Disney+, these services have changed the entertainment landscape. How do you see this affecting traditional television in the coming years?",
    authorId: "user3",
    categoryId: "cat4",
    createdAt: "2023-08-05T16:45:00Z",
    likes: 27,
    comments: 15,
    views: 198,
    tags: ["streaming", "television", "entertainment"]
  },
  {
    id: "post4",
    title: "Programming languages to learn in 2023",
    content: "With the tech industry constantly evolving, it's important to stay updated with the most in-demand programming languages. Which languages do you think are worth learning this year and why?",
    authorId: "user4",
    categoryId: "cat1",
    createdAt: "2023-07-28T11:30:00Z",
    likes: 56,
    comments: 32,
    views: 421,
    tags: ["programming", "coding", "technology"]
  }
];

export const comments: Comment[] = [
  {
    id: "comment1",
    content: "I completely agree with your points. AI is definitely going to play a major role in shaping our future technology landscape.",
    authorId: "user2",
    postId: "post1",
    createdAt: "2023-08-15T15:10:00Z",
    likes: 8
  },
  {
    id: "comment2",
    content: "While I agree that AI has potential, I'm concerned about privacy implications and the ethical considerations we need to address.",
    authorId: "user3",
    postId: "post1",
    createdAt: "2023-08-15T16:05:00Z",
    likes: 12
  },
  {
    id: "comment3",
    content: "I've been playing Elden Ring and it's definitely one of the best open-world experiences I've had this year!",
    authorId: "user1",
    postId: "post2",
    createdAt: "2023-08-10T10:20:00Z",
    likes: 15
  },
  {
    id: "comment4",
    content: "Personally, I think Python continues to be one of the most versatile languages to learn in 2023, especially with its applications in AI and data science.",
    authorId: "user2",
    postId: "post4",
    createdAt: "2023-07-28T12:45:00Z",
    likes: 9
  }
];
