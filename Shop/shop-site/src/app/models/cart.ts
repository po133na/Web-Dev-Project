export interface CartItem {
    id: any;
    product: number;
    quantity: number;
  }

export interface Cart {
    items: CartItem[];
    enrichedItems?: any[];
  }