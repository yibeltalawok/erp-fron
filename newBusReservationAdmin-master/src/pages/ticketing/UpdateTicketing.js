import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";

import {
  updateTicketing,
  singleTicketing,
} from "../../states/actions/ticketingAction";
import { useParams } from "react-router-dom";
import { viewBus } from "../../states/actions/busAction";
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
const UpdateTicketing = () => {
  const buttonName = "save changes";
  const { id } = useParams();
  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    onReset();
  }, []);

  const onReset = async () => {
    const result = await dispatch(singleTicketing(id));
    reset(result.payload);
  };
  const onSubmit = (routeData) => {
    // pass the data form data
    console.log("tiket==", routeData);
    const formData = new FormData();
    Object.entries(routeData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // dispatch
    dispatch(updateTicketing(routeData));
  };
  const buses = useSelector((state) => state.buses);
  // use effect
  useEffect(() => {
    dispatch(viewBus());
  }, []);
  return (
    <Layout>
      <Box class="py-24 bg-gray-100  bg-opacity-50 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <Typography variant="h6">Update Ticketing Details</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className=" space-y-2 shadow">
              <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-6 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans"> Bus Talga </Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`busId`, {
                          //  required: true,
                          maxLength: 7,
                        })}
                      >
                        {buses?.buses?.map((MenuItem) => (
                          <MenuItem key={MenuItem?.id} value={MenuItem?.id}>
                            {MenuItem?.talga}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </div>
                </div>
              </div>
              <Divider />
              <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-6 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans"> Destination</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`terminalId`, {
                          // required: true,
                          maxLength: 700,
                        })}
                      >
                        <MenuItem value="1">Gonder</MenuItem>
                        <MenuItem value="1">Bahir dar</MenuItem>
                        <MenuItem value="1">Dangila</MenuItem>
                      </Select>
                    </Box>
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <Typography class="md:w-4/12 mx-auto max-w-sm">Seat Number</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`seatNumber`, {
                          //  required: true,
                          maxLength: 20,
                        })}
                      />
                    </Box>
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <Typography class="md:w-4/12 mx-auto max-w-sm">Schedule Time</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                       {...register(`reservationDate`, {
                          //required: true,
                          maxLength: 200,
                        })}
                      />
                    </Box>
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
export default UpdateTicketing;
