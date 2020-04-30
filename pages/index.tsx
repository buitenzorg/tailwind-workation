import { GetStaticProps } from 'next';

import { IHomeSearchResult } from '../interfaces';
import HouseCardDetail from '../components/HouseCardDetail';
import SiteHeader from '../components/SiteHeader';
import SiteFilters from '../components/SiteFilters';

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
        img: '/img/kenny.jpg',
        rates: {
          period: 'wk',
          amount: 1400,
        },
        rating: 3,
        reviews: 34,
      },
      {
        isPlus: false,
        beds: 3,
        baths: 2,
        desc: 'Modern Home in cityx center',
        img: '/img/zac-cain-unsplash.jpg',
        rates: {
          period: 'mon',
          amount: 5500,
        },
        rating: 5,
        reviews: 34,
      },
      {
        isPlus: false,
        beds: 3,
        baths: 2,
        desc: 'Modern Home in city center',
        img: '/img/kenny.jpg',
        rates: {
          period: 'mon',
          amount: 5500,
        },
        rating: 5,
        reviews: 34,
      },
      {
        isPlus: false,
        beds: 3,
        baths: 2,
        desc: 'Modern Home in cityzxcasdqwesx center',
        img: '/img/zac-cain-unsplash.jpg',
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
    <SiteHeader />
    <SiteFilters /> 
    <main className="main-content overflow-y-auto flex-col px-4 py-6">
      <h2 className="text-xl text-gray-900">{searchResults.city}</h2>
      <p className="text-gray-60">{searchResults.desc}</p>
      <div className="-mt-8 sm:flex sm:overflow-x-auto sm:-mx-2">
        <HouseCardDetail houses={searchResults.houses} />
      </div>
    </main>
  </div>
);

export default IndexPage;
