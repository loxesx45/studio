export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const carouselImages: Omit<ImagePlaceholder, 'id' | 'imageHint'>[] = [
  {
    imageUrl: '/carousel-images/supermarket-storefront.jpg',
    description: 'A bright and welcoming Sivam Supermarket storefront.',
  },
  {
    imageUrl: '/carousel-images/grocery-aisle.jpg',
    description: 'Aisle with shelves full of various grocery items.',
  },
  {
    imageUrl: '/carousel-images/fresh-produce.jpg',
    description: 'Fresh and colorful vegetables and fruits on display.',
  },
  {
    imageUrl: '/carousel-images/cleaning-supplies.jpg',
    description: 'Cleaning supplies and other household items.',
  },
  {
    imageUrl: '/carousel-images/snacks-beverages.jpg',
    description: 'Assortment of snacks and beverages.',
  },
];
