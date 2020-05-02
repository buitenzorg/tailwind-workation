import { GetStaticProps } from 'next';

import { IHomeSearchResult } from '../interfaces';
import SiteHeader from '../components/SiteHeader';
import SiteFilters from '../components/SiteFilters';
import HomeContent from '../components/HomeContent';
import { searchResults } from '../data/index';

type Props = {
  searchResults: IHomeSearchResult[];
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      searchResults
    },
  };
};

const IndexPage = ({ searchResults }: Props) => (
  <div className="flex min-h-screen flex-col bg-gray-200 antialiased xl:flex-col xl:h-screen">
    <SiteHeader />
    <div className="xl:flex-1 xl:flex overflow-y-hidden">
      <SiteFilters />
      <main className="main-content overflow-y-auto flex-col px-4 py-6 xl:h-full xl:w-full xl:px-16">
        <HomeContent searchResults={searchResults} />
      </main>
    </div>
  </div>
);

export default IndexPage;
