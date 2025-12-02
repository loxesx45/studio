import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import imageData from '@/lib/placeholder-images.json';
const aboutImage = imageData.about;

const commitments = [
  "Unwavering Reliability",
  "Extensive Product Availability",
  "Warm, Customer-First Friendliness",
  "Commitment to Our Community"
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About Shivam Super Market</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just a store, we are a cornerstone of the Minjur community.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold font-headline mb-4">Our Story: Serving Minjur's Heart</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Shivam Super Market was born from a simple idea: to provide the residents in the interior areas of Minjur with a reliable, friendly, and well-stocked grocery store. For years, our community faced the challenge of limited product availability and a lack of convenient services like door delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We set out to change that. By opening our doors, we made essential services easy and accessible. We believe that everyone deserves access to fresh food and household necessities without hassle. Our store is a testament to our commitment to making life a little easier and a lot friendlier for our neighbors.
            </p>
            <Card className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-headline font-semibold mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  {commitments.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={500}
                height={375}
                className="rounded-xl shadow-lg object-cover w-full h-full"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
