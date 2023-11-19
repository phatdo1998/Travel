import { NextResponse } from "next/server";

const topTour = [
  {
    image: "/destination-1.jpg.webp",
    name: "Paris, Italy",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: true,
  },
  {
    image: "/destination-2.jpg.webp",
    name: "San Francisco, USA",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: true,
  },
  {
    image: "/destination-3.jpg.webp",
    name: "Paris, ItalyLodon, UK",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: true,
  },
  {
    image: "/destination-4.jpg.webp",
    name: "Lion, Singapore",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: true,
  },
  {
    image: "/destination-5.jpg.webp",
    name: "Australia",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: true,
  },
];

export async function GET(request: Request, response: Response) {
  return NextResponse.json(topTour);
}
