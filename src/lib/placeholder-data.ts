export type Course = {
  id: string;
  title: string;
  instructor: string;
  category: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  imageUrl: string;
  description: string;
  lessons: { id: string; title: string; duration: string; videoUrl: string }[];
  isPurchased?: boolean;
  progress?: number; // 0-100
};

export type Certificate = {
  id: string;
  courseId: string;
  courseTitle: string;
  issueDate: string;
  downloadUrl: string;
};

export const courses: Course[] = [
  {
    id: '1',
    title: 'Advanced React & Next.js',
    instructor: 'Jane Smith',
    category: 'Development',
    duration: '24 hours',
    rating: 4.8,
    reviews: 1204,
    price: 99.99,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Deep dive into advanced React patterns and build production-ready Next.js applications.',
    lessons: [
      { id: 'l1', title: 'Introduction to Next.js 14', duration: '15:20', videoUrl: '' },
      { id: 'l2', title: 'Server Components', duration: '25:10', videoUrl: '' },
      { id: 'l3', title: 'Advanced Routing', duration: '30:05', videoUrl: '' },
    ],
    isPurchased: true,
    progress: 75,
  },
  {
    id: '2',
    title: 'UI/UX Design Masterclass',
    instructor: 'John Doe',
    category: 'Design',
    duration: '18 hours',
    rating: 4.9,
    reviews: 2345,
    price: 129.99,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Learn the principles of user interface and user experience design from scratch.',
    lessons: [
      { id: 'l1', title: 'Intro to Figma', duration: '20:00', videoUrl: '' },
      { id: 'l2', title: 'Design Systems', duration: '45:30', videoUrl: '' },
    ],
    isPurchased: true,
    progress: 100,
  },
  {
    id: '3',
    title: 'Digital Marketing Fundamentals',
    instructor: 'Emily White',
    category: 'Marketing',
    duration: '12 hours',
    rating: 4.6,
    reviews: 890,
    price: 79.99,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Your complete guide to digital marketing, including SEO, social media, and more.',
    lessons: [
       { id: 'l1', title: 'SEO Basics', duration: '30:15', videoUrl: '' },
    ],
  },
  {
    id: '4',
    title: 'Startup Business Plan',
    instructor: 'Michael Brown',
    category: 'Business',
    duration: '10 hours',
    rating: 4.7,
    reviews: 560,
    price: 89.99,
    imageUrl: 'https://placehold.co/600x400.png',
    description: 'Learn how to write a comprehensive business plan for your startup.',
    lessons: [
      { id: 'l1', title: 'Executive Summary', duration: '22:00', videoUrl: '' },
    ],
  },
];

export const user = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatarUrl: 'https://placehold.co/100x100.png',
};

export const certificates: Certificate[] = [
  {
    id: 'cert1',
    courseId: '2',
    courseTitle: 'UI/UX Design Masterclass',
    issueDate: '2023-10-15',
    downloadUrl: '#',
  },
];
