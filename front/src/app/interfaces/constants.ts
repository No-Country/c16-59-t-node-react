export interface DeliveryOptions {
  id: number;
  title: string;
  description: DescriptionDelivery[];
  image: string;
  titleButton: string;
}

export interface DescriptionDelivery {
  text: string;
  bold?: boolean;
}
