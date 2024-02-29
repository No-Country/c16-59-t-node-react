// RoleData.ts
export interface RoleI {
  id: string;
  name: string;
  img: string;
}

export const roles: RoleI[] = [
  {
    id: "role001",
    name: 'vendedor',
    img: 'https://s3-alpha-sig.figma.com/img/783d/cc8a/bc3644d4d07d1e8379fd56301df96b52?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=noAERZsN6rUMtndwTwm3Jx5bgaSlodXaBNqZTsScjSCI31SAMWWwzVQPrXR4RUFkaD5IwnHR-lgYGaQpyvPLtKBkKDxlAYRf6kxKvNvUvFsi2DEEUYmHYcerdWXJPJIJsAtnUdIaGmySExVBy-4uf9BMxqzdGiwOIC1Gbpm4W13JQV1Xqhco754kcVICUUCFazmBURgIlvB6eMJJRijmaVL~tIf1wCAALbKUlpSB4Q8pTGeBdZZUdmQg1EFFpsE297omlgdmgattfDsWttXFNHWkd1MVc9u2ebq3e2lodT76T2tXqrbmyWggJ6rcGi6egro~plNXXZLj6DUTkBCozA__'
  },
  {
    id: "role002",
    name: 'comprador',
    img: 'https://s3-alpha-sig.figma.com/img/e326/494a/d5c4c5b6a57909f81bf7fc299a029788?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=opSF~Kvba1fuq7Ofq9IjaWxvxgZ9E88FcOC84ojlJYSZfIKml6E41pqFWoJtpeGB~q1rGVxbbCoCGRObhq68J9UKrUtDdBNt-CB4xo5LGmfa3JnqSYKbELLfFIaZjWBRPhsz0SSBX0pTF1ZKh1evksfO5ZYGmGrV4sFCdiO96rbWxUVhtRHnV0-nprSg7JWojPomoD5XqRjOLvGakQdpEtpkwxgiBtPIc6BjjeMg9EIjAAW-7Pe5y1TVNt-oe-VF3q-K7E~2oX0xXbGvVk0Uim8UH62wWovknTkPE-sdpQPdi8cqOGyzI-7c1q59nWRQ~huY1Nm3cXc28Di1ka4ibg__'
  },
];
