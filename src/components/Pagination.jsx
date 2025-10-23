import React from "react";

const Pagination = ({ current = 1, total = 1, onPrev, onNext }) => {
  const disablePrev = !current || current <= 1;
  const disableNext = !total || current >= total;

  return (
    <div className="flex justify-center items-center flex-wrap gap-10 my-24">
      <button
        className="join-item btn btn-outline"
        onClick={onPrev}
        disabled={disablePrev}
      >
        Previous page
      </button>
      <span>
        {current} / {total}
      </span>
      <button
        className="join-item btn btn-outline"
        onClick={onNext}
        disabled={disableNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
