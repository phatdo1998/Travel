import { NextResponse } from "next/server";

const testimony = [
  {
    image: "/person_1.jpg.webp",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    address: "Guest from Itali",
  },
  {
    image: "/person_2.jpg.webp",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    address: "Guest from London",
  },
  {
    image: "/person_3.jpg.webp",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    address: "Guest from Philippines",
  },
];

export async function GET(request: Request, response: Response) {
  return NextResponse.json(testimony);
}
