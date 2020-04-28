import { GetStaticProps } from 'next';

import { IHomeSearchResult } from '../interfaces';
import HouseCardDetail from '../components/HouseCardDetail';

type Props = {
  searchResults: IHomeSearchResult;
};

export const getStaticProps: GetStaticProps = async () => {
  const searchResults: IHomeSearchResult = {
    city: 'Los Angeles',
    desc: 'Live like the stars in these luxurious Souther California estates',
    houses: [
      {
        isPlus: true,
        beds: 3,
        baths: 2,
        desc: 'Modern Home in city center',
        rates: {
          period: 'wk',
          amount: 1400,
        },
        rating: 5,
        reviews: 34,
      },
      {
        isPlus: false,
        beds: 3,
        baths: 2,
        desc: 'Modern Home in cityx center',
        rates: {
          period: 'mon',
          amount: 5500,
        },
        rating: 5,
        reviews: 34,
      },
    ],
  };
  return {
    props: {
      searchResults,
    },
  };
};

const IndexPage = ({ searchResults }: Props) => (
  <div className="flex min-h-screen flex-col bg-gray-200 antialiased">
    <header className="nav bg-gray-900 flex items-center px-4 py-3 text-gray-500 justify-between">
      <div className="flex items-center c ">
        <svg
          className="h-8 w-auto text-gray-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
        <p className="text-white pl-2">
          Work<span className="text-gray-500">action</span>
        </p>
      </div>
      <div className="flex">
        <button>
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
    <section className="flex bg-gray-800 px-4 py-3 justify-between text-gray-500">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          className="rounded-lg w-4/5 bg-gray-900  focus:outline-none focus:bg-white focus:text-gray-900 pl-10 pr-3 py-2"
          placeholder="Search by keywords"
        />
      </div>
      <button className="inline-flex bg-gray-700 rounded-lg shadow px-3 hover:bg-gray-600 focus:text-gray-900 focus:outline-none focus:shadow-outline">
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
        </svg>
        <span className="text-white font-medium ml-1">Filters</span>
      </button>
    </section>
    <main className="main-content overflow-y-auto flex-col px-4 py-6">
      <h2 className="text-xl text-gray-900">{searchResults.city}</h2>
      <p className="text-gray-60">{searchResults.desc}</p>
      <div className="mt-5">
        <HouseCardDetail houses={searchResults.houses} /> 
      </div>
    </main>
  </div>
);

export default IndexPage;
