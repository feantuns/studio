import Image from 'next/image';
import { courses } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Video, GraduationCap } from 'lucide-react';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id);

  if (!course) {
    return <div className="container py-8">Course not found</div>;
  }

  return (
    <div>
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge variant="secondary" className="uppercase text-xs tracking-wider font-semibold">{course.category}</Badge>
              <h1 className="text-4xl font-bold mt-2 mb-4 text-primary font-headline">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">
                    ({course.reviews} reviews)
                  </span>
                </div>
                <span>
                  Taught by{' '}
                  <span className="font-semibold text-primary">
                    {course.instructor}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 font-headline">Course Content</h2>
            <Accordion type="single" collapsible className="w-full">
              {course.lessons.map((lesson, index) => (
                <AccordionItem value={`item-${index}`} key={lesson.id}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-3 text-left">
                      <Video className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{lesson.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    A brief description of the lesson content would go here.
                    Duration: {lesson.duration}.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
               <div className="relative aspect-video rounded-lg overflow-hidden mb-4 shadow-lg">
                <Image
                  src={course.imageUrl}
                  alt={course.title}
                  fill
                  className="object-cover"
                  data-ai-hint="course thumbnail"
                />
              </div>
              <div className="border rounded-lg p-6 shadow-lg bg-card">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  ${course.price}
                </h2>
                <Button className="w-full mb-2 bg-accent text-accent-foreground hover:bg-accent/90">
                  Add to Cart
                </Button>
                <Button variant="default" className="w-full">
                  Buy Now
                </Button>
                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <p className="font-bold text-card-foreground">
                    This course includes:
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration} on-demand video</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    <span>{course.lessons.length} lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Certificate of completion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
