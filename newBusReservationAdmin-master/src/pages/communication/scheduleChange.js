import React from "react";
import Avatar from "@mui/material/Avatar";
import Layout from "../../pages/layout/Layout";

const ScheduleChange = () => {
  return (
    <Layout>
      <div class="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div>
          <div class="rounded-lg overflow-hidden">
            <div class="relative overflow-hidden pb-60">
              <img
                class="absolute h-full w-full object-cover object-center"
                src="https://collect.criggzdesign.com/wp-content/uploads/2020/07/5c77d8a62417e4405611bb42_3k-color-1-scaled.jpg"
                alt=""
              />
            </div>
            <div class="relative bg-blue-200">
              <div class="py-10 px-8">
                <h3 class="text-2xl font-bold">Schedule change</h3>
                <div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
                  <p>mr&nbsp;</p>
                  <a
                    href="https://www.ls.graphics/"
                    class="hover:text-black transition duration-300 ease-in-out"
                  >
                    Abebe E+up
                  </a>
                </div>
                <p class="leading-7">
                  I am writing to inform you of a necessary adjustment to my
                  availability and route schedule as the driver at E+up. I need
                  to modify my current schedule.
                </p>
                <div class="mt-10 flex justify-between items-center">
                  <div>
                    <Avatar />
                  </div>
                  <a href="/" class="flex items-center">
                    <p class="mr-4">See more</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.125"
                      height="13.358"
                      viewBox="0 0 14.125 13.358"
                    >
                      <g transform="translate(-3 -3.293)">
                        <path
                          id="Path_7"
                          data-name="Path 7"
                          d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
                          fill="#1d1d1d"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ScheduleChange;
