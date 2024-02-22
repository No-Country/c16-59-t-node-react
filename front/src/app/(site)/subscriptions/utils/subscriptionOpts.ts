interface Subscription {
  id: number;
  title: string;
  price: string;
  content: string[];
  img: string;
  color: "primary-yellow" | "secondary-orange" | "tertiary-green"
}

export const data: Subscription[] = [
  {
    id: 1,
    title: "La Huerta Box - SEMANAL",
    price: "$20.000",
    content: [
      "︎5 opciones de verdura de temporada",
      "4 opciones de fruta de temporada",
      "4 opciones de productos procesados naturalmente"
    ],
    img: "https://s3-alpha-sig.figma.com/img/34e6/eac9/c077b6804ef3b20c534a8779d4a2f517?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kfzC65ZzGZZKbkWq~BsfToQmvTrug6PiSwYlY9l3QcVrKWEAk7IA1tVtIMQtANe2Ypu56lCE8xpy6l-c8Tg6vjzNMbjx1lmHvQE8WMX3KpRBIjli6Gu8AF7X4yCoMcKxXa5asUu1j6Ttunttnl-GW4nCglOmin5oNKCfMbk5FCABSO70F-ktwVDmZU~sufXNhFLqC6sswNTbCK39fFOFyr-oLYnl4OJa9GqwfdbB3-5fyaOojIZSOTQVpiv7gk1WTkyON9uUkIIVf4VXoFgsg-V-qlr7HRJF0nzXgwCo3GNRB3MyXPEdv1bhNaaEilSQcL1-ooGTMe27Ac-sA1j6Lg__",
    color: "tertiary-green"
  },
  {
    id: 2,
    title: "La Huerta Box - MENSUAL",
    price: "$20.000",
    content: [
      "2 opciones de verdura de temporada",
      "2 opciones de fruta de temporada",
      "2 opciones de productos procesados naturalmente"
    ],
    img: "https://s3-alpha-sig.figma.com/img/34e6/eac9/c077b6804ef3b20c534a8779d4a2f517?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kfzC65ZzGZZKbkWq~BsfToQmvTrug6PiSwYlY9l3QcVrKWEAk7IA1tVtIMQtANe2Ypu56lCE8xpy6l-c8Tg6vjzNMbjx1lmHvQE8WMX3KpRBIjli6Gu8AF7X4yCoMcKxXa5asUu1j6Ttunttnl-GW4nCglOmin5oNKCfMbk5FCABSO70F-ktwVDmZU~sufXNhFLqC6sswNTbCK39fFOFyr-oLYnl4OJa9GqwfdbB3-5fyaOojIZSOTQVpiv7gk1WTkyON9uUkIIVf4VXoFgsg-V-qlr7HRJF0nzXgwCo3GNRB3MyXPEdv1bhNaaEilSQcL1-ooGTMe27Ac-sA1j6Lg__",
    color: "primary-yellow"
  },
  {
    id: 3,
    title: "La Huerta Box - EXPRESS",
    price: "$20.000",
    content: [
      "︎Opciones de verdura de temporada a preferencia",
      "Opciones de fruta de temporada a preferencia",
      "Opciones de productos procesados naturalmente a preferencias"
    ],
    img: "https://s3-alpha-sig.figma.com/img/34e6/eac9/c077b6804ef3b20c534a8779d4a2f517?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kfzC65ZzGZZKbkWq~BsfToQmvTrug6PiSwYlY9l3QcVrKWEAk7IA1tVtIMQtANe2Ypu56lCE8xpy6l-c8Tg6vjzNMbjx1lmHvQE8WMX3KpRBIjli6Gu8AF7X4yCoMcKxXa5asUu1j6Ttunttnl-GW4nCglOmin5oNKCfMbk5FCABSO70F-ktwVDmZU~sufXNhFLqC6sswNTbCK39fFOFyr-oLYnl4OJa9GqwfdbB3-5fyaOojIZSOTQVpiv7gk1WTkyON9uUkIIVf4VXoFgsg-V-qlr7HRJF0nzXgwCo3GNRB3MyXPEdv1bhNaaEilSQcL1-ooGTMe27Ac-sA1j6Lg__",
    color: "secondary-orange"
  }
];
