interface Subscription {
  id: number;
  title: string;
  price: string;
  content: string[];
  img: string;
  color: "primary-yellow" | "secondary-orange" | "tertiary-green";
  route:string
}

export const data: Subscription[] = [
  {
    id: 3,
    title: "La Huerta Box - EXPRESS",
    price: "",
    content: [
      "︎Opciones de verdura de temporada a preferencia",
      "Opciones de fruta de temporada a preferencia",
      "Opciones de productos procesados naturalmente a preferencias"
    ],
    img: "https://s3-alpha-sig.figma.com/img/bb93/8520/88d4ee249515e371002fbceda76b239e?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IhgaLeuSA1PKoQ3vNxHCF8llIQDrYruu-RX3q-ppZXwSoFLcMebhs0l5kcQrewqVRaBq4o6Op8D1rZKYLmXZdXBvSA0UCF9vyUVaganRFFUmFnpEJ9prpcrhSlqPea-siPNdIbBNmZaW~Mdn0AsuxZ~psrEX2bxrOwaYDpIoLl7KykbuMyb8hYfuCsxyAgVUwelgGprjJDF8F7p~6PMsEv8ssQtVMaqhfBtzu6cL0HqSg184JBYpa3EdVH-bZ~7wnBvPqJ4EVnvbSKfrHjQ2NoPF6sIYOCCjB0vx~m4OZN4mN20Wejldnvr2JLru0Mirk4wrQe05JjyvPhfJri6MSw__",
    color: "secondary-orange",
    route:"/products"
  },
  {
    id: 1,
    title: "La Huerta Box - SEMANAL",
    price: "$20.000",
    content: [
      "︎5 opciones de verdura de temporada",
      "4 opciones de fruta de temporada",
      "4 opciones de productos procesados naturalmente"
    ],
    img: "https://s3-alpha-sig.figma.com/img/96c4/1c11/095a8ebaae318a9cb468006eaf6ada70?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jyUpK0B7giV7k-ChuD0eiAnaqkG~TAk5YTjFFSavzRa2WDDgZs3pW1dAqqjeL4PQaG8hHMqyJRnTNSdq090Yk9TU~h1Eve2w3p0upx-RKRyYNHY2n~FWc1HUNiXSsCuGjlOT-DO7-rrulqOnkpkO9g5tlG-a1uAPjQhBLBdJLUINKbIlJZge9p6DOrAAM0lmWDZ~bGLzD49-Fqv2MqBMBFsV--gnp-rGpUtxCUdabOiHzOgYkizhaD4DXWZklEsQHza9gghiiarwAluRIir7WflgCz~Q-40X70lAhHZNns7DjPHrzCq84yiHcsqIlaXjhHnO0xmBrJjvhfPrOHL5xg__",
    color: "tertiary-green",
    route:"/"
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
    img: "https://s3-alpha-sig.figma.com/img/7bba/ac87/16b2668a4f84f2a0e7176c75b28d6cd3?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iVR8tU2iR3ATZ3AkIefuoy5efuMBlgq3wGk4d~uV~40A1Q-21EdJprZqbsNCfu3nr5J~G4htsCP-ScpHV2EtDAG9quBeyiX9KQViw28A-p0pn3iZs3AJeTzXAmX6VwNOKjnLSBO5w2SreVAQ1wvpiXbB6tp4yqpOyd8UtxbwlharLld0oV~oSxc2RCPyolb-Jf0VoELZhg~9aRcaJ1aEQ3ZojMRXASlegW26nldIU7NCC1y9nBJbfJhRBaAS0rWrFBvi8uWRHFslUnfdXyQ23XtTn1XsSGleg6Hr9E0QC6bI-DQeyju2vJzYLivf0~E3Xzhgk32APvr1o-VxfgtP4Q__",
    color: "primary-yellow",
    route:"/"
  },
];
