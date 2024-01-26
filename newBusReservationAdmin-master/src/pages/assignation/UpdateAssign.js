import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import {
  updateAssignation,
  singleAssignation,
} from "../../states/actions/assignationAction";
import { viewBus } from "../../states/actions/busAction";
import { viewRoutes } from "../../states/actions/routeAction";
import { viewDriver } from "../../states/actions/driverAction";
import { useParams } from "react-router-dom";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from "react-toastify";
import Register from "../../components/button/registerButton";
import Layout from "../../pages/layout/Layout";
const UpdateAssign = () => {
  // use form
  const dispatch = useDispatch();
  const { id } = useParams();
  // use form
  const { handleSubmit, register, reset, control } = useForm();
  // use effect
  useEffect(() => {
    onReset();
  }, []);

  const onReset = async () => {
    const result = await dispatch(singleAssignation(id));
    reset(result.payload);
  };
  // useSelector
  const buses = useSelector((state) => state.buses);
  const routes = useSelector((state) => state.routes);
  const driver = useSelector((state) => state.driver);
  // use effect
  useEffect(() => {
    dispatch(viewBus());
    dispatch(viewDriver());
    dispatch(viewRoutes());
  }, []);
  const onSubmit = (data) => {
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    // dispatch
    const newData = {
      ...data,
      startTime: data.startDate,
      endTime: data.endDate,
    };
    dispatch(updateAssignation(newData));
  };
  return (
    <Layout>
      <section class="md:py-20 py-16 bg-gray-100  bg-opacity-50 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <h1 class="text-gray-700 font-semibold">Bus Assignation</h1>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="bg-white md:space-y-2 space-y-0 ">
              <hr />
              <div class="md:inline-flex w-full space-y-1 md:pt-2 pt-1 p-4 text-gray-700 items-center">
                <h2 class="md:w-2/12 max-w-sm mx-auto">Bus</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <select
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        {...register(`busId`, {})}
                      >
                        {buses?.buses?.map((bus) => (
                          <option key={bus.id} value={bus.id}>
                            {bus.talga}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div class="md:inline-flex w-full space-y-1 md:pt-2 pt-1 p-4 text-gray-700 items-center">
                <h2 class="md:w-2/12 max-w-sm mx-auto">Driver</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <select
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        {...register(`driverId`)}
                      >
                        {driver?.driver?.map((driv) => (
                          <option key={driv.id} value={driv.id}>
                            {driv.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-1 md:pt-2 pt-1 p-4 text-gray-700 items-center">
                <h2 class="md:w-2/12 max-w-sm mx-auto">Router</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <select
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        {...register(`routeId`)}
                      >
                        {routes?.routes?.map((route) => (
                          <option key={route.id} value={route.id}>
                            {route.sourceStation?.stationName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-1 md:pt-2 pt-1 p-4 text-gray-700 items-center">
                <h2 class="md:w-2/12 mx-auto max-w-sm">Type </h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <input
                        name="assignationType"
                        type="text"
                        {...register(`assignationType`)}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-1 md:pt-2 pt-1 p-4 text-gray-700 items-center">
                <h2 class="md:w-2/12 mx-auto max-w-sm">Starting Time</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <Controller
                        name="startDate"
                        control={control}
                        render={({ field }) => (
                          <Datepicker
                            class="w-full focus:outline-none focus:text-gray-600 p-4"
                            {...field}
                            selected={field.value}
                            onChange={(startTime) => field.onChange(startTime)}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeIntervals={15}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="md:inline-flex w-full space-y-1 md:pt-2 pt-1 p-4 text-gray-700 items-center">
                <h2 class="md:w-2/12 max-w-sm mx-auto">Ending Time</h2>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <Controller
                        name="endDate"
                        control={control}
                        render={({ field }) => (
                          <Datepicker
                            class="w-full focus:outline-none focus:text-gray-600 p-4"
                            {...field}
                            selected={field.value}
                            onChange={(endTime) => field.onChange(endTime)}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeIntervals={15}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="w-full pb-2 pt-3 text-right text-gray-500">
                <Register btnName="Update" />
              </div>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </Layout>
  );
};
export default UpdateAssign;
