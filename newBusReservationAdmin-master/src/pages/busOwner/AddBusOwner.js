import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerBusOwner } from "../../states/actions/busOwnerAction";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Divider,
} from "@mui/material";

// add new bus owner
const AddBusOwner = () => {
  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const busOwner = useSelector((state) => state.busOwner);

  const onSubmit = (data) => {
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    // dispatch
    dispatch(registerBusOwner(data));
    reset();
    setTimeout(function () {
      navigate("/allBusOwners");
    }, 5000);

    if (busOwner?.success == true) {
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }};

  return (
    <Layout>
      <Box className="py-24 h-screen">
        <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <Typography variant="h6">Register Bus Owner</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper className=" space-y-2 shadow">
              <Divider />
              <div className="md:inline-flex w-full md:space-y-0 p-3 text-gray-500 items-center">
                <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  
                >
                  First Name
                </Typography>
                <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box>
                      <TextField
                        label="enter first name"
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`firstName`, {
                          required: true,
                          maxLength: 100,
                          pattern: /[a-zA-Z]+$/,
                        })}
                        // className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                      />
                    </Box>
                    {errors.firstName && (
                      <p className="text-red-500">First name is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div className="md:inline-flex w-full space-y-2 md:space-y-0 p-3 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto">
                  Last Name
                </Typography>
                <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box>
                      <TextField
                        label="enter last name"
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`lastName`, {
                          required: true,
                          maxLength: 100,
                          pattern: /[a-zA-Z]+$/,
                        })}
                      />
                    </Box>
                    {errors.lastName && (
                      <p className="text-red-500">Last name is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-3 text-gray-500 items-center">
                <Typography className="md:w-3/12 mx-auto max-w-sm">
                  Email
                </Typography>
                <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box className="w-full inline-flex">
                      <div className="pt-2 w-1/12 bg-gray-100">
                        <svg
                          fill="none"
                          className="w-6 text-gray-400 mx-auto"
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
                      <TextField
                        label="example12@gmail.com"
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                      />
                    </Box>
                    {errors.email && (
                      <p className="text-red-500">Email is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-3 text-gray-500 items-center">
                <Typography className="md:w-3/12 mx-auto max-w-sm">
                  Address
                </Typography>
                <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div className="w-full inline-flex">
                      <TextField
                        label="Bahir dar"
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register("address", {
                          required: true,
                          maxLength: 100,
                        })}
                      />
                    </div>
                    {errors.address && (
                      <p className="text-red-500">Address is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-3 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto">
                  Phone Number
                </Typography>
                <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div className="w-full inline-flex">
                      <Box className="pt-2 w-1/12 bg-gray-100">
                        <svg
                          fill="none"
                          className="w-6 text-gray-400 mx-auto"
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
                      </Box>
                      <TextField
                        label="+2519259999"
                        size="small"
                        fullWidth
                        type="text"
                        {...register("phone", {
                          required: true,
                          pattern: /((^(\+251|0)(9|7)\d{2})-?\d{6})$/,
                        })}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500">
                        phone number is required and enter only correct inout!
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div className="w-full p-4 text-right text-gray-500">
                <button className="md:w-2/3 focus:outline-none mr-4 bg-blue-400 hover:bg-indigo-500 text-white font-bold xl:text-base md:text-base border border-gray-300 w-full text-sm py-2.5 outline-blue-500 rounded">
                  Save
                </button>
              </div>
            </Paper>
          </form>
        </div>
      </Box>
      <ToastContainer />
    </Layout>
  );
};
export default AddBusOwner;
