
export interface SubscriptionApi {
  id: string;
  title: string;
  price?: number;
  content: string[];
  img: string;
  route:string
}

export interface SubscriptionClient extends SubscriptionApi {
  color: "primary-yellow" | "secondary-orange" | "tertiary-green";
  assignColor: (key:any)=>string
}