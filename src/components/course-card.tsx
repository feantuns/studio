import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '@/lib/placeholder-data';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl rounded-lg">
      <CardHeader className="p-0">
        <Link href={`/courses/${course.id}`} className="block">
          <div className="relative h-48 w-full">
            <Image
              src={course.imageUrl}
              alt={course.title}
              fill
              className="object-cover"
              data-ai-hint="course thumbnail"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <Badge variant="secondary" className="mb-2 uppercase text-xs tracking-wider font-semibold">{course.category}</Badge>
        <Link href={`/courses/${course.id}`}>
          <h3 className="text-lg font-semibold leading-tight mb-2 line-clamp-2 hover:text-primary transition-colors font-headline">
            {course.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-4">
          By {course.instructor}
        </p>
        <div className="flex items-center text-sm text-muted-foreground gap-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span>
              {course.rating} ({course.reviews})
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>
        {course.progress !== undefined && (
          <div className="mt-4">
            <Progress value={course.progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">
              {course.progress}% complete
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {course.isPurchased ? (
          <Button asChild className="w-full">
            <Link href={`/courses/${course.id}/watch`}>Continue Learning</Link>
          </Button>
        ) : (
          <div className="flex justify-between items-center w-full">
            <p className="text-xl font-bold text-primary">${course.price}</p>
            <Button asChild>
              <Link href={`/courses/${course.id}`}>View Details</Link>
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
