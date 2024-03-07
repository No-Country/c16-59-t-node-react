export interface DeliveryOptions {
  id: string;
  type: DeliveryType;
  description: string;
  image: string;
}

export enum DeliveryType {
  EntregaPuertaAPuerta = "entrega-puerta-a-puerta",
  EntregaEnNuestraSede = "entrega-en-nuestra-sede",
}
