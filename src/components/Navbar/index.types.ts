export type CheckoutItem = {
    id: string;
    quantity: number;
    price: number;
    title: string;
  }

  export interface ItemReducerInterface {
    item: CheckoutItem,
    action: string
  }