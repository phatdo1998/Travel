import { NextResponse } from "next/server";

const popularHotels = [
  {
    image: "/hotel-1.jpg.webp",
    name: "Hotel, Italy",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: false,
  },
  {
    image: "/hotel-2.jpg.webp",
    name: "San Francisco, USA",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: false,
  },
  {
    image: "/hotel-3.jpg.webp",
    name: "Paris, ItalyLodon, UK",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: false,
  },
  {
    image: "/hotel-4.jpg.webp",
    name: "Lion, Singapore",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: false,
  },
  {
    image: "/hotel-5.jpg.webp",
    name: "Australia",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: false,
  },
];

export async function GET(request: Request, response: Response) {
  return NextResponse.json(popularHotels);
}
