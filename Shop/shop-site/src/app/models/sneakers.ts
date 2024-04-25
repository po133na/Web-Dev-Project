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
      name: 'Apple iPhone 15 Pro',
      description: 
      'A phone that girls need to take the best photos ever',
      price: 568990,
      image_url: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h00/83559620739102.jpg?format=preview-large',
      is_active: true,
      category: 2
    }
];
