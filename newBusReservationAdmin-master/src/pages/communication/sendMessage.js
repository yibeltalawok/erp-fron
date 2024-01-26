import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { sendMessage } from "../../states/actions/communicationAction";
import { ToastContainer } from "react-toastify";
import { viewEmployee } from "../../states/actions/employeeAction";
import Layout from "../../pages/layout/Layout";

const SendMessage = () => {
  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (communicationData) => {
    // pass the data form data
    const formData = new FormData();
    Object.entries(communicationData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // dispatch
    const newData = {
      ...communicationData,
      senderId: 1,
      receiverId: 2,
    };
    dispatch(sendMessage(newData));
  };
  const employee = useSelector((state) => state.employee);
  // use effect
  useEffect(() => {
    dispatch(viewEmployee());
  }, []);
  return (
    <Layout>
      <div class="min-h-screen flex items-center">
        <div class="w-full xl:w-9/12 lg:w-10/12 md:w-11/12 mx-auto xl:mt-5 md:mt-5 mt-2">
          <div class="bg-white rounded mb-6 p-12">
            <div class=" gap-4 gap-y-2 text-sm  mx-4  ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                headers={{ "Content-Type": "application/json" }}
              >
                <div class=" gap-20 text-sm space-y-8">
                  <p class="text-gray-500 mb-4 font-bold text-lg">
                    communication among staff members
                  </p>
                  {/* <div>
                    <label class="text-sm text-gray-950 uppercase tracking-wide  mb-0.5 mt-2 block ml-4">
                      sender Id Name
                    </label>
                    <div class="relative flex items-center">
                      <input
                        name="AssociationName"
                        type="text"
                        {...register(`senderId`, {
                          required: true,
                          maxLength: 10,
                        })}
                        class="bg-gray-50 border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                        placeholder="kebie"
                      />
                    </div>
                    {errors.response && (
                      <p className="text-red-500">Receiver Name is required!</p>
                    )}
                  </div> */}
                  <div>
                    <label class="text-sm text-gray-950 uppercase tracking-wide  mb-0.5 mt-2 block ml-4">
                      Receiver Name
                    </label>
                    <div class="relative flex items-center">
                      <select
                        value={employee?.id}
                        class="bg-gray-50 border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                        {...register(`receiverId`, {
                          required: true,
                          maxLength: 7,
                        })}
                      >
                        {employee?.employee?.map((option) => (
                          <option key={option?.id} value={option?.id}>
                            {option?.firstName}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.response && (
                      <p className="text-red-500">Receiver Name is required!</p>
                    )}
                  </div>
                  <div>
                    <label class="text-sm text-gray-950 uppercase tracking-wide  mb-0.5 mt-2 block ml-4">
                      Messages
                    </label>
                    <div class="relative flex items-center">
                      <textarea
                        name="Description"
                        type="text"
                        {...register(`message`, {
                          required: true,
                          maxLength: 100,
                        })}
                        class="bg-gray-50 border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                        placeholder="I hope this letter finds you well"
                        cols="30"
                        rows="8"
                      />
                    </div>
                    {errors.response && (
                      <p className="text-red-500">Description is required!</p>
                    )}
                  </div>
                  <div>
                    <div class="relative flex justify-end">
                      <button
                        type="submit"
                        class="bg-primary w-1/2 hover:bg-hoverButton text-white font-bold py-3 px-6 rounded"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};
export default SendMessage;
