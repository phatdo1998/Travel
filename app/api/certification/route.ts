import { NextResponse } from "next/server";

const certification = [
  {
    title: "Best Price Guarantee",
    description: "A small river named Duden flows by their place and supplies.",
    icon: "fa-solid fa-heart",
  },
  {
    title: "Travellers Love Us",
    description: "A small river named Duden flows by their place and supplies.",
    icon: "fa-solid fa-heart",
  },
  {
    title: "Best Travel Agent",
    description: "A small river named Duden flows by their place and supplies.",
    icon: "fa-solid fa-heart",
  },
  {
    title: "Our Dedicated Support",
    description: "A small river named Duden flows by their place and supplies.",
    icon: "fa-solid fa-heart",
  },
];

export async function GET(request: Request, response: Response) {
  return NextResponse.json(certification);
}
