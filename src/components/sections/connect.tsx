
'use client';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useInteractiveCardTransform } from '@/hooks/use-interactive-card-transform';
import { cn } from '@/lib/utils';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ConnectSection() {
  const cardTransformProps = useInteractiveCardTransform({ hoverScale: 1.02, hoverTranslateY: -2 });
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`Contact from ${values.name} via Portfolio`);
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;

    toast({
      title: "Email client opened",
      description: "Please complete sending the email from your mail client.",
    });
    form.reset();
  }

  return (
    <section id="connect" className="relative min-h-screen py-16 md:py-24 flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg"
        alt="Connect Background"
        fill
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/70 dark:bg-background/80" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">Get In Touch</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out via the form or my social channels.
              </p>
            </div>
            
            <Card className="bg-card/60 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                 <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Link href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" /> GitHub
                    </Link>
                  </Button>
                </div>
                <div className="text-center lg:text-left mt-6">
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" download>
                      <Download className="mr-2 h-5 w-5" /> Download Resume
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>

          <Card 
            className={cn(
              "shadow-xl p-6 sm:p-10 hover:shadow-2xl bg-card/80 backdrop-blur-sm",
            )}
            {...cardTransformProps}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">Send me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john.doe@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Hi Prashik, I'd like to connect..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" size="lg">
                    <Mail className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
