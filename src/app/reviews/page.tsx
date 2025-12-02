import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star, StarHalf } from "lucide-react"

const reviews = [
  {
    text: "Shivam Super Market is a worthy market in Minjur.",
    author: "Valued Customer",
    rating: 5,
    type: 'positive'
  },
  {
    text: "Made all services easy.",
    author: "Local Resident",
    rating: 4.5,
    type: 'positive'
  },
  {
    text: "Good service.",
    author: "Satisfied Shopper",
    rating: 4,
    type: 'positive'
  },
  {
    text: "New",
    author: "Recent Visitor",
    rating: 5,
    type: 'neutral'
  },
  {
    text: "",
    author: "Verified Customer",
    rating: 5,
    type: 'neutral'
  },
  {
    text: "No contact number",
    author: "Anonymous",
    rating: 2,
    type: 'critical'
  },
  {
    text: "Bad service",
    author: "Anonymous",
    rating: 1,
    type: 'critical'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-5 h-5 fill-current" />
      ))}
      {halfStar && <StarHalf className="w-5 h-5 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" />
      ))}
    </div>
  );
};

export default function ReviewsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Customer Voices</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our community has to say about us. We value all feedback.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col gap-4 items-start p-6">
                      <StarRating rating={review.rating} />
                      <p className="text-lg font-semibold italic text-foreground">
                        {review.text ? `"${review.text}"` : "A 5-star experience!"}
                      </p>
                      <p className="text-sm text-muted-foreground self-end">- {review.author}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </div>
  );
}
