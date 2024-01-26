import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { viewBusOwner } from "../../../states/actions/busOwnerAction";
import { viewAssociation } from "../../../states/actions/associationAction";
import {
  viewBus,
  updateBus,
  singleBus,
} from "../../../states/actions/busAction";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import Layout from "../../../pages/layout/Layout";
// add new Employee
const UpdateBus = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const association = useSelector((state) => state.association);
  const busOwner = useSelector((state) => state.busOwner);
  // use form
  const { handleSubmit, register, reset } = useForm();
  // use effect
  useEffect(() => {
    dispatch(viewBus());
  }, []);

  useEffect(() => {
    onReset();
  }, []);
  const onReset = async () => {
    const result = await dispatch(singleBus(id));
    // console.log(result);
    reset(result.payload);
  };
  // use effect
  useEffect(() => {
    dispatch(viewBusOwner());
    dispatch(viewAssociation());
  }, []);

  const onSubmit = (data) => {
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    // dispatch
    dispatch(updateBus(data));
  };
  return (
    <Layout>
      <section class="py-24 bg-gray-100  bg-opacity-50 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <h1 class="text-gray-600">Update The Bus</h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="bg-white space-y-0">
              <hr />
              <div class="md:inline-flex w-full md:space-y-0 p-2 text-gray-500 items-center">
                <h2 class="md:w-2/12 max-w-sm mx-auto">License Plate</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        name="licensePlate"
                        type="text"
                        {...register(`licensePlate`, {
                          maxLength: 200,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-2 text-gray-500 items-center">
                <h2 class="md:w-2/12 max-w-sm mx-auto">Bus Owner</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <select
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        {...register(`busOwnerId`, {
                          maxLength: 700,
                        })}
                      >
                        {busOwner?.busOwner?.map((owner) => (
                          <option
                            key={owner.busOwnerId}
                            value={owner.busOwnerId}
                          >
                            {owner.firstName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-2 text-gray-500 items-center">
                <h2 class="md:w-2/12 max-w-sm mx-auto">Model</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        name="model"
                        type="text"
                        {...register(`model`, {
                          maxLength: 200,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex  space-y-2 md:space-y-0  w-full p-2 text-gray-500 items-center">
                <h2 class="md:w-2/12 mx-auto max-w-sm">Capacity</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        name="capacity"
                        type="text"
                        {...register(`capacity`, {
                          maxLength: 200,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-3 text-gray-500 items-center">
                <h2 class="md:w-2/12 mx-auto max-w-sm">Side No.</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        type="text"
                        {...register("sideNo", {
                          maxLength: 200,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full md:space-y-0 p-2 text-gray-500 items-center">
                <h2 class="md:w-2/12 max-w-sm mx-auto">Talga</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        name="talga"
                        type="talga"
                        {...register("talga", {})}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex  space-y-2 md:space-y-0  w-full p-2 text-gray-500 items-center">
                <h2 class="md:w-2/12 mx-auto max-w-sm">Bus level</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <select
                        value="level"
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        {...register(`level`, {
                          maxLength: 30,
                        })}
                      >
                        <option value="level-1">level-1</option>
                        <option value="level-2">level-2</option>
                        <option value="level-3">level-3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex  space-y-2 md:space-y-0  w-full p-2 text-gray-500 items-center">
                <h2 class="md:w-2/12 mx-auto max-w-sm">Price</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        type="text"
                        {...register("price", {})}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex  space-y-2 md:space-y-0  w-full p-2 text-gray-500 items-center">
                <h2 class="md:w-2/12 mx-auto max-w-sm">Association</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <select
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        {...register(`associationId`, {
                          required: true,
                          maxLength: 2000,
                        })}
                      >
                        {association?.association?.map((assocation) => (
                          <option
                            key={assocation.associationId}
                            value={assocation.associationId}
                          >
                            {assocation.associationName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="w-full p-4 text-right text-gray-500">
                <button className="w-full md:w-2/3 focus:outline-none mr-4 bg-blue-400 hover:bg-indigo-500 text-white font-bold xl:text-base md:text-base border border-gray-300 w-full text-sm py-2.5 outline-blue-500 rounded">
                  Save Changes
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
export default UpdateBus;
