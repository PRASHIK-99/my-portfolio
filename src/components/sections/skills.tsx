
'use client';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2 } from 'lucide-react';
import { useInteractiveCardTransform } from '@/hooks/use-interactive-card-transform';
import { cn } from '@/lib/utils';

export default function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen py-16 md:py-24 overflow-hidden flex items-center justify-center">
      <Image
        src="https://images.pexels.com/photos/1402790/pexels-photo-1402790.jpeg"
        alt="Skills Background"
        fill
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/70 dark:bg-background/80" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.skills.map((category, index) => {
            const cardTransformProps = useInteractiveCardTransform({ hoverScale: 1.05, hoverTranslateY: -4 });
            return (
              <Card 
                key={index} 
                className={cn(
                  "shadow-lg hover:shadow-xl bg-card/80 backdrop-blur-sm",
                )}
                {...cardTransformProps}
              >
                <CardHeader className="flex flex-row items-center space-x-3 pb-2">
                  <Code2 className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm px-3 py-1">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
