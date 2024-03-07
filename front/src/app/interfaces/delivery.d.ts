export interface DeliveryOptions {
  id: number;
  type: DeliveryType;
  description: string;
  image: string;
}

export enum DeliveryType {
  EntregaPuertaAPuerta = "entrega-puerta-a-puerta",
  EntregaEnNuestraSede = "entrega-en-nuestra-sede",
}
