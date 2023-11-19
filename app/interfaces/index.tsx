export interface TopTourInterface {
  image: string;
  name: string;
  price?: number;
  star?: number;
  rating: number;
  description: string;
  days?: number;
  nights?: number;
  address: string;
  time?: boolean;
  showPrice?: boolean;
  col?: number;
}

export interface CertificationInterface {
  title: string;
  description: string;
  icon: any;
}

export interface BlogsInterface {
  image: string;
  description: string;
  day: number;
  month: string;
  year: number;
  message: number;
  author: string;
  title: string;
}

export interface DestinationInterface {
  image: string;
  name: string;
  listing: number;
}

export interface GuestsInterface {
  image: string;
  description: string;
  address: string;
}
