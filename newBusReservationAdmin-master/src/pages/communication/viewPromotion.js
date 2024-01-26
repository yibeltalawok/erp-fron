import React from "react";
import Layout from "../../pages/layout/Layout";

const ViewPromotion = () => {
  return (
    <Layout>
      <div class="bg-gray-200 font-sans h-screen w-full flex flex-row justify-center items-center">
        <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
          <img
            class="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
            src="https://avatars.githubusercontent.com/u/67946056?v=4"
            alt=""
          />
          <div class="text-center mt-2 text-3xl font-medium">Abie kebie</div>
          <div class="text-center mt-2 font-light text-sm">@driver</div>
          <div class="text-center font-normal text-lg">Toyota D4D</div>
          <div class="px-6 text-center mt-2 font-light text-sm">
            <p>
              I have a 8 years of experience as a driver, both for personal and
              professional purposes.
            </p>
          </div>
          <hr class="mt-8" />
          <div class="flex p-4">
            <div class="w-1/2 text-center">
              <span class="font-bold">3.7 k</span> Likes
            </div>
            <div class="w-0 border border-gray-300"></div>
            <div class="w-1/2 text-center">
              <button
                type="submit"
                class="bg-gray-600 hover:bg-hoverButton text-white font-bold py-3 px-6 rounded"
              >
                Clean
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ViewPromotion;
