import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { registerStation } from "../../states/actions/stationAction";
import { ToastContainer } from "react-toastify";
import Register from "../../components/button/registerButton";
import Layout from "../../pages/layout/Layout";
//  Passenger registration component
const NewStation= () => {
  // use form
  const {
    handleSubmit,
    register,
    formState:{ errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    // dispatch
    dispatch(registerStation(data));
  };
  const stations = useSelector((state) => state.stations);
  if (stations?.success == true) {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }
  return (
    <Layout>
      <section class="md:py-20 py-16 bg-gray-100  bg-opacity-50 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <h1 class="text-gray-700 font-semibold">Register Station</h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="bg-white md:space-y-2 space-y-0 ">
              <hr />
              <div class="md:inline-flex w-full space-y-1 p-3 text-gray-700 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Name</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        name="stationName"
                        type="text"
                        {...register(`stationName`, {
                          required: true,
                          maxLength: 40,
                          pattern: /[a-zA-Z]+$/,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="eg. Bahirdar"
                      />
                    </div>
                    {errors.stationName && (
                      <p className="text-red-500">
                        Name is required and write text only!
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <hr />

              <div class="md:inline-flex w-full space-y-1 p-3 text-gray-700 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Location</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        type="text"
                        {...register("location", {
                          required: true,
                          maxLength: 50,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="Enter station's location"
                      />
                    </div>
                    {errors.location && (
                      <p className="text-red-500">
                      Enter location here!
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-1 p-3 text-gray-700 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Contact Person Name</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        type="text"
                        {...register("contactPersonName", {
                          required: true,
                          pattern: /[a-zA-Z]+$/,
                          maxLength: 70,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="Enter contact person name"
                      />
                    </div>
                    {errors.contactPersonName && (
                      <p className="text-red-500">Contact person name is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-3 text-gray-700 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Contact Person Phone</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <div class="pt-2 w-1/12 bg-gray-100">
                        <svg
                          fill="none"
                          class="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        {...register("contactPersonPhone", {
                          required: true,
                          pattern: /((^(\+251|0)(9|7)\d{2})-?\d{6})$/,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="+251999999999"
                      />
                    </div>
                    {errors.contactPersonPhone && (
                      <p className="text-red-500">
                      Contact person phone number is required and enter only correct inout!
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-3 text-gray-700 items-center">
                <h2 class="md:w-4/12 mx-auto max-w-sm">Contact Person Email</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <div class="pt-2 w-1/12 bg-gray-100">
                        <svg
                          fill="none"
                          class="w-6 text-gray-400 mx-auto"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <input
                        name="email"
                        type="email"
                        {...register("contactPersonEmail", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="email@gmail.com"
                      />
                    </div>
                    {errors.contactPersonEmail && (
                      <p className="text-red-500">Contact person email is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <hr />
              <div class="w-full pb-2 pt-4 text-right text-gray-500">
                <Register btnName="Save" />
              </div>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </Layout>
  );
};
export default NewStation;
