const Splash = () => (
  <div className="bg-gray-100 h-screen">
    <div className="px-8 py-10 max-w-xl mx-auto lg:relative lg:max-w-full lg:px-0 lg:py-20 lg:my-auto">
      <div className="lg:mx-auto xl:max-w-6xl">
        <div className="lg:w-7/12 lg:pl-12 lg:pr-8">
          <div className="flex items-center">
            <svg
              className="h-10 w-auto text-indigo-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <p className="text-gray-900 pl-2 font-semibold text-2xl">
              Work<span className="text-indigo-500 font-semibold">action</span>
            </p>
          </div>
          <div className="mt-6 lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12  lg:mt-0">
            <img
              className=" rounded-lg shadow-xl h-56 w-full object-center object-cover lg:min-h-screen lg:shadow-none lg:rounded-none"
              src="/img/woman.jpg"
            />
            <svg
              className="hidden lg:block absolute inset-y-0 left-0 h-screen w-16"
              fill="none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon className="text-gray-100" fill="currentColor" points="0,0 0,100 100,0" />
            </svg>
          </div>
          <h1 className="mt-5 font-bold text-3xl leading-tight sm:text-4xl lg:mt-16">
            You can work from anywhere.
            <br className="hideen sm:inline" />
            <span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            veniam nemo consequatur aperiam? Cum tenetur cupiditate quisquam
            voluptatem porro culpa.
          </p>
          <div className="mt-6">
            <a
              href="#"
              type="button"
              className="px-5 py-3 inline-block bg-indigo-500 rounded-lg shadow-md text-white font-semibold tracking-wide uppercase hover:bg-indigo-400"
            >
              Book your escape
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Splash;
