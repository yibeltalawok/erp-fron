import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { viewDriver } from "../../states/actions/driverAction";
import {
  updateAccident,
  singleAccident,
} from "../../states/actions/accidentAction";
import { useParams } from "react-router-dom";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { viewBus } from "../../states/actions/busAction";
import Layout from "../../pages/layout/Layout";
const UpdateAccident = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    onReset();
  }, []);

  const onReset = async () => {
    const result = await dispatch(singleAccident(id));
    reset(result.payload);
  };

  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const onSubmit = (accidentData) => {
    // pass the data form data
    const formData = new FormData();
    Object.entries(accidentData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const selectedTime = new Date(accidentData.accidentDate).toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );
    const newData = {
      ...accidentData,
      accidentDate: selectedTime,
    };
    dispatch(updateAccident(newData));
  };
  const buses = useSelector((state) => state.buses);
  const driver = useSelector((state) => state.driver);
  // use effect
  useEffect(() => {
    dispatch(viewBus());
    dispatch(viewDriver());
  }, []);

  return (
    <Layout>
      <section class="py-24 bg-gray-100  bg-opacity-50 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <h1 class="text-gray-600">Accident Data</h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="bg-white space-y-0">
              <hr />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-6 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Bus Talga</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <select
                        value={buses?.id}
                        class="bg-gray-50 border border-gray-300 w-full text-sm px-4 py-2.5 outline-blue-500"
                        {...register(`busId`, {
                          //required: true,
                          maxLength: 7,
                        })}
                      >
                        {buses?.buses?.map((option) => (
                          <option key={option?.id} value={option?.id}>
                            {option?.talga}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-6 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Driver Phone</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <select
                        value={driver?.id}
                        class="bg-gray-50 border border-gray-300 w-full text-sm px-4 py-2.5 outline-blue-500"
                        {...register(`driverId`, {
                          //required: true,
                          maxLength: 70,
                        })}
                      >
                        {driver?.driver?.map((option) => (
                          <option key={option?.id} value={option?.id}>
                            {option?.contactNumber}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <h2 class="md:w-4/12 mx-auto max-w-sm">Place</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        type="text"
                        class="w-full focus:outline-none focus:text-gray-600 p-2"
                        placeholder="bahir dar"
                        {...register(`place`, {
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
                <h2 class="md:w-4/12 max-w-sm mx-auto">Accident Type</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <select
                        value="easy"
                        class="bg-gray-50 border border-gray-300 w-full text-sm px-4 py-2.5 outline-blue-500"
                        {...register(`type`, {
                          // required: true,
                          maxLength: 700,
                        })}
                      >
                        <option value="easy">easy</option>
                      </select>
                    </div>
                  </div>
                  {errors.type && (
                    <p className="text-red-500">accident type is required!</p>
                  )}
                </div>
              </div>
              <hr />

              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Accident Date</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        type="text"
                        class="w-full focus:outline-none focus:text-gray-600 p-2"
                        {...register(`accidentDate`, {
                          //  required: true,
                          maxLength: 100,
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div class="md:inline-flex w-full space-y-1 md:space-y-0 p-4 text-gray-500 items-center">
                <h2 class="md:w-4/12 max-w-sm mx-auto">Description</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <textarea
                        rows="2"
                        type="text"
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="accident description"
                        {...register(`description`, {
                          //required: true,
                          maxLength: 700,
                          // pattern: /^[a-zA-Z]+$/,
                        })}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full pb-2 text-right text-gray-500 item-center">
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
export default UpdateAccident;
