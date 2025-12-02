import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const productCategories = [
  { id: 'groceries', name: 'Groceries' },
  { id: 'vegetables-fruits', name: 'Vegetables & Fruits' },
  { id: 'household-essentials', name: 'Household Essentials' },
  { id: 'snacks-beverages', name: 'Snacks & Beverages' },
  { id: 'personal-care', name: 'Personal Care' },
];

export default function ProductsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Products</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A wide variety of quality products to meet all your household needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => {
            const image = PlaceHolderImages.find(img => img.id === category.id);
            return (
              <Link href="#" key={category.id} className="group">
                <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-video">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center justify-between">
                      {category.name}
                      <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">
                      Explore our collection of {category.name.toLowerCase()}.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
