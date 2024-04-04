import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="border-lightButton border-t-lightCardBackground dark:border-darkButton dark:border-t-darkCardBackground h-8 w-8 animate-spin rounded-full border-4" />
    </div>
  );
};

export default LoadingSpinner;
