import { Color, Content, Id, Img, Price, Route, Title } from "./types";

export interface SubscriptionI {
  id:Id
  route: Route;
  title: Title
  price: Price
  content: Content
  image: Img;
  color: Color
}

export interface SubscriptionsI {
  options: SubscriptionI[];
}
