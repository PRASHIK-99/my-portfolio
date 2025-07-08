
'use client';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb } from 'lucide-react';
import { useInteractiveCardTransform } from '@/hooks/use-interactive-card-transform';
import { cn } from '@/lib/utils';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-16 md:py-24 overflow-hidden flex items-center justify-center">
      <Image
        src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg"
        alt="Projects Background"
        fill
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/70 dark:bg-background/80" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
          Academic Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.projects.map((project, index) => {
            const cardTransformProps = useInteractiveCardTransform({ hoverScale: 1.05, hoverTranslateY: -4 });
            return (
              <Card 
                key={index} 
                className={cn(
                  "flex flex-col shadow-lg hover:shadow-xl bg-card/80 backdrop-blur-sm",
                )}
                {...cardTransformProps}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                     <Lightbulb className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc list-inside space-y-1 text-foreground/80 mb-4">
                    {project.description.map((desc, i) => (
                      <li key={i} className="text-sm">{desc}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
