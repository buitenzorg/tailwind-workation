import { useState } from 'react';

type Props = {
  isOpen?: boolean
}

const FilterForm:React.FC<Props> = ({ isOpen }) => (
  <form className={`xl:flex xl:flex-col xl:justify-between xl:h-full ${isOpen || 'hidden' } xl:block`}>
    <div className="lg:flex xl:block overflow-auto">
      <div className="px-4 py-4 border-t border-gray-900 text-white lg:w-1/3 xl:w-full">
        <div className="flex flex-wrap -mx-2">
          <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
            <span className="font-semibold text-gray-500">Bedrooms</span>
            <select
              className="form-select mt-1 block w-full shadow"
              name=""
              id=""
            >
              <option value="">4</option>
            </select>
          </label>
          <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
            <span className="font-semibold text-gray-500">Bathrooms</span>
            <select className="form-select mt-1 block w-full" name="" id="">
              <option value="">2</option>
            </select>
          </label>
          <label className="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:w-full lg:mt-4">
            <span className="font-semibold text-gray-500">Price Range</span>
            <select className="form-select block w-full mt-1" name="" id="">
              <option value="">Up to $2000 /wk</option>
            </select>
          </label>
        </div>
      </div>
      <div className="border-t border-gray-900 px-4 py-4 text-white lg:w-1/3 lg:border-l xl:w-full">
        <span className="text-gray-500 font-semibold">Property Type</span>
        <div className="sm:flex sm:-mx-2 lg:block">
          <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-full">
            <input
              type="radio"
              className="form-radio"
              name="propertyType"
              value="house"
            />
            <span className="ml-2">House</span>
          </label>
          <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-full">
            <input
              type="radio"
              className="form-radio"
              name="propertyType"
              value="apartment"
            />
            <span className="ml-2">Apartment</span>
          </label>
          <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-full">
            <input
              type="radio"
              className="form-radio"
              name="propertyType"
              value="loft"
            />
            <span className="ml-2">Loft</span>
          </label>
          <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-full">
            <input
              type="radio"
              className="form-radio"
              name="propertyType"
              value="townhouse"
            />
            <span className="ml-2">Townhouse</span>
          </label>
        </div>
      </div>
      <div className="text-white border-t border-gray-900 py-4 px-5 lg:w-1/3 lg:border-l xl:w-full">
        <span className="text-gray-500 font-semibold">Amenities</span>
        <div className="sm:flex sm:-mx-2 sm:flex-wrap">
          <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 truncate xl:w-full">
            <input className="form-checkbox" type="checkbox" name="balcony" />
            <span className="ml-2">Balcony</span>
          </label>
          <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 truncate xl:w-full">
            <input className="form-checkbox" type="checkbox" name="pool" />
            <span className="ml-2">Pool</span>
          </label>
          <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 truncate xl:w-full">
            <input className="form-checkbox" type="checkbox" name="beach" />
            <span className="ml-2">Beach</span>
          </label>
          <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 truncate xl:w-full">
            <input
              className="form-checkbox"
              type="checkbox"
              name="petFriendly"
            />
            <span className="ml-2">Pet Friendly</span>
          </label>
          <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 truncate xl:w-full">
            <input
              className="form-checkbox"
              type="checkbox"
              name="kidFriendly"
            />
            <span className="ml-2">Kid Friendly</span>
          </label>
          <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 truncate xl:w-full">
            <input className="form-checkbox" type="checkbox" name="parking" />
            <span className="ml-2">Parking</span>
          </label>
          <label className="flex items-center mt-3 sm:w-1/4 sm:px-2 lg:w-1/2 truncate xl:w-full">
            <input
              className="form-checkbox"
              type="checkbox"
              name="airConditioning"
            />
            <span className="ml-2">Air Conditioning</span>
          </label>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 px-4 py-4 sm:text-right">
      <button
        type="button"
        className="block w-full bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg sm:w-auto sm:inline-block xl:w-full"
      >
        Update Results
      </button>
    </div>
  </form>
);

const SiteFilters: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-800 xl:w-72 xl:flex-shrink-0">
      <div className="flex px-4 py-3 justify-between text-gray-500 xl:hidden">
        <div className="relative max-w-sm w-full">
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
            className="block rounded-lg w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 pl-10 pr-3 py-2"
            placeholder="Search by keywords"
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`ml-4 inline-flex rounded-lg shadow focus:outline-none px-3 ${
            isOpen ? 'bg-gray-600' : 'bg-gray-700'
          }`}
        >
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
      </div>
      <FilterForm isOpen = { isOpen }/>
    </div>
  );
};

export default SiteFilters;
