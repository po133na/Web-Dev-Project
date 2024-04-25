export interface Sneakers {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    is_active: boolean;
    category: number;
}

export const sneakers = [
    {
      id: 1,
      name: 'Dior Air Jordans',
      description: 
      'The best Designer sneakers in the world.',
      price: 300000,
      image_url: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F01%2Fdior-air-jordan-1-low-high-first-look-1.jpg?w=960&cbr=1&q=90&fit=max',
      is_active: true,
      category: 3
    }
];
