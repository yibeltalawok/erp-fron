import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import {
  updateAssociation,
  singleAssociation,
} from "../../states/actions/associationAction";
import { buildQueries } from "@testing-library/react";
import Layout from "../../pages/layout/Layout";
import {
  Box,
  Button,
  Typography,
  Paper,
  TextField,
  Divider,
  Select,
  MenuItem
} from "@mui/material";
// Update of the association
const UpdateAssociation = (props) => {
  const { id } = useParams();
  // go
  const dispatch = useDispatch();
  // use form
  const { handleSubmit,  formState: { errors },register, reset } = useForm();

  // use effect
  useEffect(() => {
    onReset();
  }, []);

  const onReset = async () => {
    const result = await dispatch(singleAssociation(id));
    reset(result.payload);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    // dispatch
    dispatch(updateAssociation(data));
  };
  return (
    <Layout>
      <Box className="py-24 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <Typography variant="h6">Update Association Detail</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className=" space-y-2 shadow">
              <Divider />
              <div class="md:inline-flex w-full md:space-y-0 p-4 text-gray-500 items-center">
              <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  
                >Association Name</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      label="Enter association name"
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`associationName`, {
                          maxLength: 100,
                          pattern: /[a-zA-Z]+$/,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="enter association name"
                      />
                    </Box>
                    {errors.associationName && (
                      <p className="text-red-500">Enter correct format!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />

              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-4 text-gray-500 items-center">
               <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  
                >Association Address</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      label="enter association address"
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`associationAddress`, {
                          maxLength: 100,
                          pattern: /[a-zA-Z]+$/,
                        })}
                      />
                    </Box>
                    {errors.associationAddress && (
                      <p className="text-red-500">Enter correct format!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-4 text-gray-500 items-center">
             <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  
                >Person Name</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      label="enter contact person name"
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register("contactPersonName", {
                          maxLength: 100,
                          pattern: /[a-zA-Z]+$/,
                        })}
                      />
                    </Box>
                    {errors.contactPersonName && (
                      <p className="text-red-500">
                        contact Person-ame is required and use correct format!
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
              <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  
                >Person Email</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
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
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19Typography4a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </Box>
                      <TextField
                      label="email@gmail.com"
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register("contactPersonEmail", {
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                      />
                    </Box>
                    {errors.contactPersonEmail && (
                      <p className="text-red-500">
                        Email is required and enter only correct input!
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-4 text-gray-500 items-center">
             <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  
                > Person Phone</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
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
                      label="+251999999999"
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register("contactPersonPhone", {
                          pattern: /((^(\+251|0)(9|7)\d{2})-?\d{6})$/,
                        })}
                      />
                    </Box>
                    {errors.contactPersonPhone && (
                      <p className="text-red-500">
                         Enter correct format !
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-4 text-gray-500 items-center">
            <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                >Number of Buses</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      label="eg. 1,3,10,..."
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="number"
                        {...register("numberOfBuses", {
                         maxLength: 10,
                        })}
                      />
                    </Box>
                    {errors.numberOfBuses && (
                      <p className="text-red-500">
                        enter correct length !
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="w-full p-4 text-right text-gray-500">
                <button className=" md:w-2/3 focus:outline-none mr-4 bg-blue-400 hover:bg-indigo-500 text-white font-bold xl:text-base md:text-base border border-gray-300 w-full text-sm py-2.5 outline-blue-500 rounded">
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
export default UpdateAssociation;
