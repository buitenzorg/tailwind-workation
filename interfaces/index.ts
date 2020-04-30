// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export interface IHomeSearchResult {
  city: string;
  desc: string;
  houses: IHouse[];
}

export interface IHouse {
  isPlus: boolean;
  beds: number;
  baths: number;
  desc: string;
  img?: string;
  rates: {
    period: string;
    amount: number;
  };
  rating: number;
  reviews: number;
}
