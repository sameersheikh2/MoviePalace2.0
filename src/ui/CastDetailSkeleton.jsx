const CastDetailSkeleton = () => {
  return (
    <div className="mt-10 pb-10 flex justify-center gap-5 flex-wrap items-center">
      <div className="mt-6 w-full max-w-4xl mx-auto px-4">
        <div className="h-10 bg-gray-200 w-24 rounded-md mb-4 animate-pulse" />
        <div className="h-16 bg-gray-200 w-3/4 rounded-lg mb-4 animate-pulse" />
        <div className="h-6 bg-gray-200 w-48 rounded mb-2 animate-pulse" />
        <div className="h-6 bg-gray-200 w-40 rounded mb-8 animate-pulse" />
        <div className="my-20 flex flex-col md:flex-row items-center gap-4 justify-evenly flex-wrap">
          <div className="w-72 h-96 bg-gray-200 rounded-md animate-pulse" />
          <div className="md:w-1/2 space-y-3">
            <div className="h-4 bg-gray-200 w-full rounded animate-pulse" />
            <div className="h-4 bg-gray-200 w-full rounded animate-pulse" />
            <div className="h-4 bg-gray-200 w-3/4 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastDetailSkeleton;
