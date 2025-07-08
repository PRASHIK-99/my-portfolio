
'use client';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import FloatingParticles from '@/components/floating-particles';
import { Mail, Phone } from 'lucide-react';
import { useInteractiveCardTransform } from '@/hooks/use-interactive-card-transform';
import { cn } from '@/lib/utils';

export default function HomeSection() {
  const cardTransformProps = useInteractiveCardTransform({ hoverScale: 1.05, hoverTranslateY: -8 });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-16 md:py-24 overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/366283/tianjin-twilight-city-scenery-366283.jpeg"
        alt="Background"
        fill
        className="absolute inset-0 -z-20 object-cover"
        priority
      />
      <div className="absolute inset-0 -z-10 bg-background/70 dark:bg-background/80" />
      <FloatingParticles count={25} />
      <div 
        className={cn(
          "max-w-3xl mx-auto bg-card/80 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-2xl hover:brightness-105",
        )}
        {...cardTransformProps}
      >
        <div className="relative mx-auto mb-6 h-36 w-36 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg">
          <Image
            src="https://drive.google.com/uc?export=view&id=1RzhRaT6gql3uSsuq7bWGAtC_2ekzHXJJ"
            alt={siteConfig.name}
            fill
            className="object-cover"
            sizes="144px"
            data-ai-hint="profile picture"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary/80 to-accent">
          {siteConfig.name}
        </h1>
        <h2 className="text-xl sm:text-2xl text-primary/90 font-semibold mb-6 tracking-wide">
          {siteConfig.title}
        </h2>
        <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
          {siteConfig.summary}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href={`mailto:${siteConfig.contact.email}`} className="w-full sm:w-auto">
            <Button variant="outline" className="w-full">
              <Mail className="mr-2 h-5 w-5" /> {siteConfig.contact.email}
            </Button>
          </a>
          <a href={`tel:${siteConfig.contact.phone}`} className="w-full sm:w-auto">
            <Button variant="outline" className="w-full">
              <Phone className="mr-2 h-5 w-5" /> {siteConfig.contact.phone}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
