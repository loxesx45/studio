import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Truck, Users } from 'lucide-react';

const services = [
  {
    title: 'In-Store Shopping',
    description: 'Enjoy a clean, well-organized shopping experience. Our aisles are stocked with your favorite products, making it easy to find what you need.',
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
  },
  {
    title: 'Door Delivery',
    description: 'Coming soon! We are working on bringing your groceries right to your doorstep for added convenience. Stay tuned for updates.',
    icon: <Truck className="h-10 w-10 text-muted-foreground" />,
    isPlaceholder: true,
  },
  {
    title: 'Customer Assistance',
    description: 'Our friendly and knowledgeable staff are always on hand to help you find items, answer questions, and ensure you have a pleasant visit.',
    icon: <Users className="h-10 w-10 text-primary" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to make your shopping experience better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className={`text-center flex flex-col ${service.isPlaceholder ? 'opacity-70' : ''}`}>
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {service.icon}
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
                 {service.isPlaceholder && (
                    <p className="text-sm font-bold text-accent mt-4">(Placeholder)</p>
                 )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
