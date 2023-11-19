import { NextResponse } from "next/server";

const quantity = [
  {
    number: 100000,
    title: "Happy Customers",
  },
  {
    number: 40000,
    title: "Destination Places",
  },
  {
    number: 87000,
    title: "Hotels",
  },
  {
    number: 56400,
    title: "Restaurant",
  },
];

export async function GET(request: Request, response: Response) {
  return NextResponse.json(quantity);
}
