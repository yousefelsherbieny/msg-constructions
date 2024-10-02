export interface products {
  id: string;
  name: string;
  size: string;
  price: number; // Ensure this is a number
  image: string;
}

export interface CartItem {
  product: products; // The product associated with this cart item
  quantity: number; // The quantity of the product
}
