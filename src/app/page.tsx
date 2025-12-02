import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

const features = [
  {
    title: 'Wide Product Range',
    description: 'Find everything you need, from fresh produce to household essentials, in one place.',
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Easy Accessibility',
    description: 'Conveniently located in Minjur, we are your one-stop shop for daily needs.',
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Friendly Service',
    description: 'Our staff is always ready to help you with a smile.',
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
  },
];

const whyShopWithUs = [
    {
        title: "Reliable Daily Grocery",
        description: "Count on us for your daily needs with consistently stocked shelves and fresh products."
    },
    {
        title: "Friendly Local Service",
        description: "Experience a warm, welcoming shopping environment with staff who know our community."
    },
    {
        title: "Serving Our Community",
        description: "Proudly serving an interior locality with a wide selection of products otherwise hard to find."
    },
    {
        title: "Trusted For Years",
        description: "We've built a legacy of trust and reliability within the Minjur community."
    }
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight text-foreground">
              Sivam Supermarket
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground font-headline">
              Your Friendly Neighborhood Store in Minjur
            </p>
            <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-muted-foreground">
              Fresh groceries, household essentials, and quick service you can rely on.
            </p>
            <div className="mt-6 flex justify-center items-center gap-4">
              <Badge variant="secondary" className="text-lg py-2 px-4 rounded-lg shadow-sm">
                <span className="text-yellow-500 mr-2">★</span> 3.6 
              </Badge>
              <p className="text-muted-foreground">Based on Google Reviews</p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="tel:+910000000000">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/products">
                  View Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  <MapPin className="mr-2 h-5 w-5" /> Locate Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="container mx-auto px-4 md:px-6 -mt-16 md:-mt-24 z-10">
        <div className="relative rounded-xl shadow-2xl overflow-hidden aspect-[2/1]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Shop With Us Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Shop With Us?</h2>
                <p className="mt-4 text-lg text-muted-foreground">Your satisfaction is our priority.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyShopWithUs.map((item) => (
                    <Card key={item.title} className="text-center bg-background transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
