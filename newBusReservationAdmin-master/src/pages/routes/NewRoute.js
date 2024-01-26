import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { viewStation } from "../../states/actions/stationAction";
import Register from "../../components/button/registerButton";
import { newRoutes } from "../../states/actions/routeAction";
import Datepicker from "react-tailwindcss-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
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
const NewRoute = () => {
  const buttonName = "Save";
  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.stations);
  // use effect
  useEffect(() => {
      dispatch(viewStation());
  }, []);

  const onSubmit = (routeData) => {
    // pass the data form data
    const formData = new FormData();
    Object.entries(routeData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    let newDate = moment(routeData).format("yyyy-MM-DD");
    const newData = {
      ...routeData,
      estimatedTime: newDate,
    };
    // dispatch
    dispatch(newRoutes(newData));
  };
  const routes = useSelector((state) => state.routes);
  if (routes?.success == true) {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }
  return (
    <Layout>
      <Box className="py-24 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <Typography variant="h6">Add New Route</Typography>
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
                          required: true,
                          maxLength: 700,
                        })}
                      >
                      {stations?.stations?.map((station) => (
                          <MenuItem key={station.id} value={station.id}>
                            {station.stationName}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    {errors.sourceStationId && (
                      <p className="text-red-500">source is required!</p>
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
                          required: true,
                          maxLength: 700,
                        })}
                      >
                        <MenuItem value="1"> Gonder</MenuItem>
                        <MenuItem value="1"> Bahir Dar</MenuItem>
                      </Select>
                    </Box>
                    {errors.destinationStationId && (
                      <p className="text-red-500">destination is required!</p>
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
                          required: true,
                          maxLength: 100,
                        })}
                      />
                    </Box>
                    {errors.distance && (
                      <p className="text-red-500">distance is required!</p>
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
                          required: true,
                          maxLength: 40,
                        })}
                      />
                    </Box>
                    {errors.cost && (
                      <p className="text-red-500">cost is required!</p>
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
export default NewRoute;
