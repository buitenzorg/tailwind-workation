import HouseCardDetail from './HouseCardDetail';
import { IHomeSearchResult } from '../interfaces';

type Props = {
  searchResults: IHomeSearchResult[];
};

const HomeContent: React.FC<Props> = ({ searchResults }) => (
  <>
    {searchResults.map((searchResult, i) => (
      <div className="mt-10" key={i}>
        <h2 className="text-xl text-gray-900">{searchResult.city}</h2>
        <p className="text-gray-60">{searchResult.desc}</p>
        <div className="-mt-8 sm:flex sm:overflow-x-auto sm:-mx-2 xl:overflow-y-auto">
          <HouseCardDetail houses={searchResult.houses} />
        </div>
      </div>
    ))}
  </>
);
export default HomeContent;
