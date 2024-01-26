import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { addItem } from "../../states/actions/lostItemAction";
import { singleRoute, updateRoute } from "../../states/actions/routeAction";
import { useParams } from "react-router-dom";
import Layout from "../../pages/layout/Layout";
import Datepicker from "react-tailwindcss-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
const UpdateRoute = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    onReset();
  }, []);

  const onReset = async () => {
    const result = await dispatch(singleRoute(id));
    reset(result.payload);
  };
  // use form
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (routeData) => {
    // pass the data form data
    const formData = new FormData();
    Object.entries(routeData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // dispatch
    dispatch(updateRoute(routeData));
  };

  return (
    <Layout>
      <Box className="py-24 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <Typography variant="h6">Change Route Details</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className=" space-y-2 shadow">
              <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-3 text-gray-500 items-center">
                <Typography class="md:w-3/12 sans max-w-sm mx-auto">Source Station</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`sourceStationId`, {
                           
                          maxLength: 700,
                        })}
                      >
                        <MenuItem value="1"> Bahir Dar</MenuItem>
                        <MenuItem value="1"> Gonder</MenuItem>
                      </Select>
                    </Box>
                    {errors.sourceStationId && (
                      <p className="text-red-500">Enter correct length!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />

              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-3 text-gray-500 items-center">
                <Typography class="md:w-3/12  sans max-w-sm mx-auto">Destination</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`destinationStationId`, {
                           
                          maxLength: 700,
                        })}
                      >
                        <MenuItem value="1"> Gonder</MenuItem>
                        <MenuItem value="1"> Bahir Dar</MenuItem>
                      </Select>
                    </Box>
                    {errors.destinationStationId && (
                      <p className="text-red-500">Enter correct length!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-6 text-gray-500 items-center">
                <Typography class="md:w-3/12  sans max-w-sm mx-auto">Distance</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`distance`, {
                           
                          maxLength: 100,
                        })}
                      />
                    </Box>
                    {errors.distance && (
                      <p className="text-red-500">Enter correct length!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <Typography class="md:w-3/12  sans mx-auto max-w-sm">Cost</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"                     
                        label="e.g 240 birr"
                        {...register(`cost`, {
                           
                          maxLength: 40,
                        })}
                      />
                    </Box>
                    {errors.cost && (
                      <p className="text-red-500">Enter correct length!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                <Typography class="md:w-3/12  sans max-w-sm mx-auto"> Estimated Time</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <Controller
                        name="estimatedTime"
                        control={control}
                        render={({ field }) => (
                          <Datepicker
                            class="w-full focus:outline-none focus:text-gray-600 p-4"
                            {...field}
                            Selected={field.value}
                            onChange={(estimatedTime) =>
                              field.onChange(estimatedTime)
                            }
                            asSingle={true}
                          />
                        )}
                      />
                    </div>
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
export default UpdateRoute;
