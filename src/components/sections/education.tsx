
'use client';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { GraduationCap, CalendarDays, Info } from 'lucide-react'; 
import { useInteractiveCardTransform } from '@/hooks/use-interactive-card-transform';
import { cn } from '@/lib/utils';

export default function EducationSection() {
  return (
    <section id="education" className="relative min-h-screen py-16 md:py-24 overflow-hidden flex items-center justify-center">
      <Image
        src="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg"
        alt="Education Background"
        fill
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/70 dark:bg-background/80" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
          My Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {siteConfig.education.map((edu, index) => {
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
                  <div className="flex items-center space-x-4 mb-2">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-sm">{edu.institution}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <CalendarDays className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{edu.duration}</span>
                  </div>
                  {edu.description && (
                    <div className="flex items-start text-foreground/80 text-sm">
                      <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{edu.description}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
