import { certificates } from '@/lib/placeholder-data';
import {
  Card,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Award } from 'lucide-react';
import Link from 'next/link';

export default function MyCertificatesPage() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary font-headline">My Certificates</h1>
        <p className="text-muted-foreground mt-2">
          View and download your earned certificates.
        </p>
      </div>

      {certificates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className="flex flex-col sm:flex-row items-center p-6 gap-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0">
                <Award className="w-20 h-20 text-accent" />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <CardTitle className="text-xl mb-1 font-headline">{cert.courseTitle}</CardTitle>
                <CardDescription>Issued on: {cert.issueDate}</CardDescription>
                <Button className="mt-4 w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                  <Download className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-2 border-dashed rounded-lg flex flex-col items-center justify-center">
          <Award className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">No Certificates Yet</h2>
          <p className="text-muted-foreground mt-2 mb-4">
            Complete courses to earn certificates and find them here.
          </p>
          <Button asChild>
            <Link href="/my-courses">View My Courses</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
