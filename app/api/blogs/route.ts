import { NextResponse } from "next/server";

const blogs = [
  {
    image: "/image_1.jpg.webp",
    description: "8 Best homestay in Philippines that you don't miss out",
    day: 12,
    month: "August",
    year: 2023,
    message: 3,
    author: "Admin",
    title: "Tips, Travel",
  },
  {
    image: "/image_2.jpg.webp",
    description: "8 Best homestay in Philippines that you don't miss out",
    day: 12,
    month: "August",
    year: 2023,
    message: 3,
    author: "Admin",
    title: "Culture",
  },
  {
    image: "/image_3.jpg.webp",
    description: "8 Best homestay in Philippines that you don't miss out",
    day: 12,
    month: "August",
    year: 2023,
    message: 3,
    author: "Admin",
    title: "Tips, Travel",
  },
  {
    image: "/image_4.jpg.webp",
    description: "8 Best homestay in Philippines that you don't miss out",
    day: 12,
    month: "August",
    year: 2023,
    message: 3,
    author: "Admin",
    title: "Tips, Travel",
  },
];

export async function GET(request: Request, response: Response) {
  return NextResponse.json(blogs);
}
