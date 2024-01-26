import React from "react";

const Loading = () => {
  return (
    <>
      <div class="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
        <div class="flex justify-center items-center mt-[50vh]">
          <div class="absolute animate-spin rounded-full h-48 w-48 border-t-4 border-b-4 border-purple-500"></div>
          <img
            src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
            class="rounded-full h-28 w-28"
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
