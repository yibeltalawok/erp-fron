import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  updateEmployee,
  singleEmployee,
} from "../../../states/actions/employeeAction";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import Layout from "../../../pages/layout/Layout";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Divider,
} from "@mui/material";
// Update Employee componenet
const UpdateEmployee = () => {
  const buttonName = "Save change";
  // use form
  const { id } = useParams();
  // go
  const dispatch = useDispatch();
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
    const result = await dispatch(singleEmployee(id));
    // console.log(result);
    reset(result.payload);
  };

  const onSubmit = (employeeData) => {
    const formData = new FormData();
    Object?.entries(employeeData).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    const newData = {
      ...employeeData,
      role: "admin",
    };

    // dispatch
    dispatch(updateEmployee(newData));
    //  window.location.reload();
  };
  return (
    <Layout>
      <Box className="py-24 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <Typography variant="h6">Update Employee Details</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className=" space-y-2 shadow">
              <Divider />
              <div class="md:inline-flex w-full md:space-y-0 p-4 text-gray-500 items-center">
               <Typography className="md:w-3/12 max-w-sm mx-auto sans">First Name</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-3">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`firstName`, {
                          maxLength: 100,
                          pattern: /^[a-zA-Z]+$/,
                        })}
                      />
                    </Box>
                    {errors.firstName && (
                      <p className="text-red-500">Enter correct format!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-4 text-gray-500 items-center">
               <Typography className="md:w-3/12 max-w-sm mx-auto sans"> Last Name</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-3">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`lastName`, {
                           
                          maxLength: 100,
                          pattern: /^[a-zA-Z]+$/,
                        })}
                      />
                    </Box>
                    {errors.lastName && (
                      <p className="text-red-500">Enter correct format!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-2 md:space-y-0  w-full p-4 text-gray-500 items-center">
               <Typography className="md:w-3/12 max-w-sm mx-auto sans">Position</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-3">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`position`, {
                           
                          maxLength: 30,
                          pattern: /[a-zA-Z]+$/,
                        })}
                      />
                    </Box>
                    {errors.position && (
                      <p className="text-red-500">Enter correct format!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-2 md:space-y-0  w-full p-4 text-gray-500 items-center">
              <Typography className="md:w-3/12 max-w-sm mx-auto sans">Personal Email</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-3">
                  <div>
                    <div class="w-full inline-flex border">
                      <Box class="pt-2 w-1/12 bg-gray-100">
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
                      </Box>
                      <TextField
                       variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register("email", {
                           
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500">Enter correct format!</p>
                    )}
                  </div>
                </div>
              </div>

              <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-4 text-gray-500 items-center">
              <Typography className="md:w-3/12 max-w-sm mx-auto sans">Address</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-3">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register("address", {
                          maxLength: 100,
                          pattern: /[a-zA-Z]+$/,
                        })}
                      />
                    </Box>
                    {errors.address && (
                      <p className="text-red-500">Enter correct format!</p>
                    )}
                  </div>
                </div>
              </div>

              <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-4 text-gray-500 items-center">
               <Typography className="md:w-3/12 max-w-sm mx-auto sans">Phone Number</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-3">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Box class="pt-2 w-1/12 bg-gray-100">
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
                      </Box>
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register("phone", {
                           
                          pattern: /((^(\+251|0)(9|7)\d{2})-?\d{6})$/,
                        })}
                      />
                    </Box>
                    {errors.phone && (
                      <p className="text-red-500">
                        phone number is required and enter only correct inout!
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-4 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Password</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-3">
                  <div>
                    <div class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="password" 
                        {...register("password", {
                           maxLength:20
                        })}
                      />
                    </div>
                    {errors.password && (
                      <p className="text-red-500">Enter correct length!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />

              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-4 text-gray-500 items-center">
               <Typography className="md:w-3/12 max-w-sm mx-auto sans"> Salary</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register("salary", {
                           maxLength:10
                        })}
                      />
                    </div>
                    {errors.salary && (
                      <p className="text-red-500">Enter correct length!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="w-full p-4 text-right text-gray-500">
                <button className=" md:w-2/3 focus:outline-none mr-4 bg-blue-400 hover:bg-indigo-500 text-white font-bold xl:text-base md:text-base border border-gray-300 w-full text-sm py-2.5 outline-blue-500 rounded">
                  Save Change
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
export default UpdateEmployee;
