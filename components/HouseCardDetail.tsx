import React from 'react';
import Rating from './Rating';
import { IHouse } from '../interfaces';

type Props = {
  houses: IHouse[];
};
const HouseCardDetail: React.FC<Props> = ({ houses }) => (
  <>
    {houses.map((house, i) => (
      <div key={i} className="mt-10">
        <div>
          <img
            className="h-64 rounded-lg shadow-md"
            src="/img/kenny.jpg"
            alt=""
          />
        </div>
        <div className="relative px-4 -mt-16">
          <div className="bg-white rounded-lg px-4 py-3 ">
            <div className="flex items-baseline uppercase leading-loose tracking-wide font-semibold">
              {house.isPlus && (
                <span className="inline-block bg-teal-200 text-teal-800 rounded-full px-2 py-1 leading-none text-sm">
                  plus
                </span>
              )}
              <span className="pl-2 text-gray-600 text-xs">
                {`${house.beds} beds`} &bull; {`${house.baths} baths`}
              </span>
            </div>
            <h4 className="text-gray-900 text-lg font-semibold mt-1">
              {house.desc}
            </h4>
            <p className="mt-2">
              ${house.rates.amount}
              <span className="ml-1 text-gray-600">/{house.rates.period}</span>
            </p>

            <div className="flex items-center mt-2">
              <Rating ratings={house.rating} />
              <span className="ml-2">{house.rating} Reviews</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default HouseCardDetail;
