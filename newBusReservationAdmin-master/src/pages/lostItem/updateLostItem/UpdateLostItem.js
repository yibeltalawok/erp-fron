import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { singleItem, updateItem } from "../../../states/actions/lostItemAction";
import { ToastContainer } from "react-toastify";
import Layout from "../../../pages/layout/Layout";

const UpdateLostitem = () => {
  // hooks
  const dispatch = useDispatch();
  const { id } = useParams();
  // use form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // use effect
  useEffect(() => {
    onReset();
  }, []);

  const onReset = async () => {
    const result = await dispatch(singleItem(id));
    // console.log(result);
    reset(result.payload);
  };

  const onSubmit = (lostItemData) => {
    const formData = new FormData();

    Object.entries(lostItemData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // dispatch
    dispatch(updateItem(lostItemData));
    //window.location.reload();
  };
  return (
    <Layout>
      <section class="py-24 bg-gray-100  bg-opacity-50 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <h1 class="text-gray-600">Add Lost and Found Items</h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="bg-white space-y-0">
              <hr />
              <div class="md:inline-flex w-full md:space-y-0 p-6 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Lost Item</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        type="text"
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="Id or money"
                        {...register(`itemName`, {
                          //  required: true,
                          maxLength: 20,
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-6 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Personal Contact</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        type="text"
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="0912341234"
                        {...register(`contactPerson`, {
                          //required: true,
                          maxLength: 20,
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <h2 class="md:w-4/12 mx-auto max-w-sm">Personal Email</h2>
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
                        type="text"
                        class="w-full focus:outline-none focus:text-gray-600 p-2"
                        placeholder="men@gmail.com"
                        {...register("contactEmail", {
                          //  required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Phone Number</h2>
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
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="0912341234"
                        {...register(`contactPhone`, {
                          //required: true,
                          maxLength: 20,
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Description</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <textarea
                        rows="2"
                        type="text"
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="lost item description"
                        {...register(`description`, {
                          // required: true,
                          maxLength: 700,
                        })}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="w-full p-4 text-right text-gray-500">
                <button className="w-full md:w-2/3 focus:outline-none mr-4 bg-blue-400 hover:bg-indigo-500 text-white font-bold xl:text-base md:text-base border border-gray-300 w-full text-sm py-2.5 outline-blue-500 rounded">
                  Save Change
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </Layout>
  );
};
export default UpdateLostitem;
