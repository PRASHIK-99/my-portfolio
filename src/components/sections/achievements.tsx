
'use client';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useInteractiveCardTransform } from '@/hooks/use-interactive-card-transform';
import { cn } from '@/lib/utils';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative min-h-screen py-16 md:py-24 overflow-hidden flex items-center justify-center">
      <Image
        src="https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg"
        alt="Achievements Background"
        fill
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/70 dark:bg-background/80" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
          Achievements & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.achievements.map((cert, index) => {
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
                  <div className="flex items-start space-x-3">
                    <Award className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg leading-tight">{cert.name}</CardTitle>
                      {cert.issuer && <CardDescription className="text-xs mt-1">{cert.issuer}</CardDescription>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* Additional content can be added here if needed */}
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-accent-foreground">
                    <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
