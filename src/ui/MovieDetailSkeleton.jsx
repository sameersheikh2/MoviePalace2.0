const MovieDetailSkeleton = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20 py-8">
      <div className="h-10 bg-gray-200 w-24 rounded-md mb-4 animate-pulse" />
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full sm:w-80 md:w-96 aspect-[2/3] bg-gray-200 rounded-xl animate-pulse" />
        <div className="flex flex-col justify-between flex-1 space-y-4">
          <div>
            <div className="h-12 bg-gray-200 w-3/4 rounded-lg mb-4 animate-pulse" />
            <div className="h-8 bg-gray-200 w-32 rounded-lg mb-4 animate-pulse" />
            <div className="flex gap-2">
              <div className="h-10 bg-gray-200 w-40 rounded-lg animate-pulse" />
              <div className="h-10 bg-gray-200 w-40 rounded-lg animate-pulse" />
            </div>
          </div>
          <div className="w-full md:w-[550px] aspect-video bg-gray-200 rounded-xl animate-pulse" />
        </div>
      </div>
      <div className="mt-8">
        <div className="h-8 bg-gray-200 w-48 rounded-lg mb-4 animate-pulse" />
        <div className="h-4 bg-gray-200 w-full rounded mb-2 animate-pulse" />
        <div className="h-4 bg-gray-200 w-full rounded mb-2 animate-pulse" />
        <div className="h-4 bg-gray-200 w-3/4 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default MovieDetailSkeleton;
