import { courses } from '@/lib/placeholder-data';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CheckCircle, PlayCircle, Lock, Book } from 'lucide-react';
import Link from 'next/link';

export default function WatchCoursePage({
  params,
}: {
  params: { id: string };
}) {
  const course = courses.find((c) => c.id === params.id && c.isPurchased);

  if (!course) {
    return (
      <div className="container text-center py-20">
        <h1 className="text-2xl font-bold">Course not found or not purchased.</h1>
        <p className="text-muted-foreground mt-2">
          Please purchase the course to access the content.
        </p>
        <Button asChild className="mt-4">
          <Link href="/">Browse Courses</Link>
        </Button>
      </div>
    );
  }

  const currentLesson = course.lessons[0];

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
      <div className="flex-1 lg:w-3/4 bg-black flex flex-col">
        <div className="aspect-video bg-gray-900 flex items-center justify-center">
          <PlayCircle className="w-24 h-24 text-white/50" />
        </div>
        <div className="p-6 text-background flex-grow">
          <h1 className="text-2xl font-bold font-headline">{currentLesson.title}</h1>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">
              Course Progress
            </p>
            <div className="flex items-center gap-4">
              <Progress value={course.progress} className="flex-1" />
              <span className="text-sm font-semibold">{course.progress}%</span>
            </div>
          </div>
        </div>
      </div>

      <aside className="w-full lg:w-[400px] border-l bg-card flex flex-col">
        <Tabs defaultValue="curriculum" className="flex-1 flex flex-col">
          <TabsList className="grid w-full grid-cols-2 rounded-none">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>

          <TabsContent
            value="curriculum"
            className="flex-1 overflow-y-auto p-0 m-0"
          >
            <div className="p-4 border-b">
              <h2 className="text-lg font-bold font-headline">{course.title}</h2>
              <p className="text-sm text-muted-foreground">
                {course.lessons.length} lessons
              </p>
            </div>
            <ul className="divide-y">
              {course.lessons.map((lesson, index) => (
                <li
                  key={lesson.id}
                  className={`p-4 flex items-center justify-between transition-colors ${
                    index === 0 ? 'bg-primary/10' : 'hover:bg-primary/5 cursor-pointer'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {index === 0 ? (
                      <PlayCircle className="w-5 h-5 text-primary" />
                    ) : index < 2 ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Book className="w-5 h-5 text-muted-foreground" />
                    )}
                    <div>
                      <p className="font-medium">{lesson.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {lesson.duration}
                      </p>
                    </div>
                  </div>
                  {index > 1 && (
                    <Lock className="w-4 h-4 text-muted-foreground" />
                  )}
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="notes" className="flex-1 flex flex-col p-4 m-0">
            <h3 className="text-lg font-semibold mb-2 font-headline">
              My Notes for this Lesson
            </h3>
            <Textarea
              placeholder="Type your notes here..."
              className="flex-1 mb-4"
            />
            <Button>Save Note</Button>
          </TabsContent>
        </Tabs>
      </aside>
    </div>
  );
}
