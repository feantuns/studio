import { CourseCard } from '@/components/course-card';
import { courses } from '@/lib/placeholder-data';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MyCoursesPage() {
  const purchasedCourses = courses.filter((c) => c.isPurchased);

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary font-headline">My Learning</h1>
        <p className="text-muted-foreground mt-2">
          Continue your learning journey and track your progress.
        </p>
      </div>

      {purchasedCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {purchasedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-lg flex flex-col items-center justify-center">
          <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">No Courses Yet</h2>
          <p className="text-muted-foreground mt-2 mb-4 max-w-sm">
            You haven&apos;t purchased any courses. Explore our catalog to get started!
          </p>
          <Button asChild>
            <Link href="/">Browse Courses</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
