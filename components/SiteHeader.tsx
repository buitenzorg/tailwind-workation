import { useState } from 'react';
import Link from 'next/link';

const SiteHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className="nav bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
      <div className="flex px-4 py-3 items-center text-gray-500 justify-between xl:w-72 xl:bg-gray-900 xl:justify-center xl:text-lg xl:py-5">
        <div className="flex items-center">
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
        <div className="flex sm:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="px-2 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`font-semibold text-white sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="relative max-w-md w-full hidden xl:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              className="h-6 w-6 stroke-current text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            className="block rounded-lg w-full border border-transparent bg-gray-200 text-gray-900 pl-10 pr-3 py-2 focus:outline-none focus:border-gray-700 focus:bg-white"
            placeholder="Search by keywords"
          />
        </div>
        <div className="sm:flex sm:items-center">
          <div className="px-2 pt-2 pb-5 border-b border-gray-800 sm:border-b-0 sm:py-2 sm:flex sm:text-sm sm:px-0 xl:text-gray-900 sm:text-sm xl:text-base">
            <a
              href="#"
              className="block px-2 py-1 rounded-md hover:bg-gray-600"
            >
              List your property
            </a>
            <a
              href="#"
              className="mt-2 px-2 py-1 block rounded-md hover:bg-gray-600 sm:mt-0 sm:ml-2"
            >
              Trips
            </a>
            <a
              href="#"
              className="mt-2 px-2 py-1 block rounded-md hover:bg-gray-600 sm:mt-0 sm:ml-2"
            >
              Messages
            </a>
          </div>
          <div className="relative py-5 sm:py-0 sm:px-0">
            <div className="px-3 flex items-center">
              <a href="#" onClick={() => setOpenProfile(!openProfile)}>
                <img
                  src="/img/jonathan.jpg"
                  alt=""
                  className="rounded-full w-10 h-10 object-cover border-2 border-gray-600 sm:w-8 sm:h-8 xl:border-gray-300"
                />
              </a>
              <span className="font-semibold text-gray-200 ml-4 sm:hidden">
                Isla Schoger
              </span>
            </div>
            <div
              className={`px-4 mt-5 flex flex-col text-gray-400 ${
                openProfile ? 'block' : 'sm:hidden'
              } sm:absolute sm:right-0 sm:w-48 sm:bg-white sm:rounded-lg sm:shadow-lg sm:mt-3 sm:py-2 sm:px-0 z-20`}
            >
              <div
                onClick={() => setOpenProfile(false)}
                className={`sm:inset-0 sm:fixed sm:z-0 sm:cursor-default sm:bg-transparent ${
                  openProfile ? 'sm:block' : 'hidden'
                }`}
              ></div>
              <div className="z-10">
                <a
                  href="#"
                  className="block hover:text-white sm:pt-0 sm:text-gray-900 sm:hover:bg-indigo-500 sm:pl-4 font-normal"
                >
                  Account Settings
                </a>

                <Link href="splash">
                  <a className="block hover:text-white mt-3 sm:pt-0 sm:text-gray-900 sm:hover:bg-indigo-500 sm:pl-4 font-normal">
                    Support
                  </a>
                </Link>

                <a
                  href="#"
                  className="block hover:text-white mt-3 sm:pt-0 sm:text-gray-900 sm:hover:bg-indigo-500 sm:pl-4 font-normal"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SiteHeader;
