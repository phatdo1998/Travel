import { NextResponse } from "next/server";

const destination = [
  {
    image: "/destination-1.jpg.webp",
    name: "Paris, Italy",
    listing: 5,
  },
  {
    image: "/destination-2.jpg.webp",
    name: "San Francisco, USA",
    listing: 3,
  },
  {
    image: "/destination-3.jpg.webp",
    name: "Lodon, UK",
    listing: 15,
  },
  {
    image: "/destination-4.jpg.webp",
    name: "Lion, Singapore",
    listing: 7,
  },
  {
    image: "/destination-5.jpg.webp",
    name: "Australia",
    listing: 12,
  },
  {
    image: "/destination-6.jpg.webp",
    name: "Japan",
    listing: 6,
  },
];

export async function GET(request: Request, response: Response) {
  return NextResponse.json(destination);
}
