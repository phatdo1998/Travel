import { NextResponse } from "next/server";

const popularRestaurants = [
  {
    image: "/restaurant-1.jpg.webp",
    name: "Luxury Restaurant",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: false,
    showPrice: false,
  },
  {
    image: "/restaurant-2.jpg.webp",
    name: "Luxury Restaurant",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: false,
    showPrice: false,
  },
  {
    image: "/restaurant-3.jpg.webp",
    name: "Luxury Restaurant",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: false,
    showPrice: false,
  },
  {
    image: "/restaurant-4.jpg.webp",
    name: "Luxury Restaurant",
    price: 200,
    star: 4,
    rating: 8,
    description:
      "Far far away, behind the word mountains, far from the countries",
    days: 2,
    nights: 3,
    address: "San Franciso, CA",
    time: false,
    showPrice: false,
  },
];

export async function GET(request: Request, response: Response) {
  return NextResponse.json(popularRestaurants);
}
