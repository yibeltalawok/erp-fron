import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addMaintenanceSchedule } from "../../../states/actions/maintenanceAction";
import { viewBus } from "../../../states/actions/busAction";
import { ToastContainer } from "react-toastify";
import Layout from "../../../pages/layout/Layout";
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
const MaintenanceSchedule = () => {
  // use effect
  const buses = useSelector((state) => state.buses);
  // console.log("all buses: ", buses);
  // use effect
  useEffect(() => {
    dispatch(viewBus());
  }, []);
  // use form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (maintenanceData) => {
    // pass the data form data
    const formData = new FormData();

    Object.entries(maintenanceData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // dispatch
    dispatch(addMaintenanceSchedule(maintenanceData));
    reset();
  };
  const maintenance = useSelector((state) => state.maintenance);
  if (maintenance?.success == true) {
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
                <Typography variant="h6">Register Association</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className=" space-y-2 shadow">
              <div class="md:inline-flex w-full md:space-y-0 p-4 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Bus Talga</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`busId`, {
                          required: true,
                          maxLength: 700,
                        })}
                      >
                        {buses?.buses?.map((item) => (
                          <MenuItem key={item.id} value={item.id}>
                            {item.talga}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    {errors.busId && (
                      <p className="text-red-500">Please Select bus!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />

              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-4 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Cost</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`cost`, {
                          required: true,
                          maxLength: 20,
                        })}
                        label="example. 14,000 birr"
                      />
                    </Box>
                    {errors.cost && (
                      <p className="text-red-500">Cost is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-4 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Description</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <textarea
                        name="description"
                        rows="4"
                        type="text"
                        {...register(`description`, {
                          required: true,
                          maxLength: 2000,
                          pattern: /[a-zA-Z]+$/,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="maintainace description"
                      ></textarea>
                    </div>
                    {errors.description && (
                      <p className="text-red-500">Description is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="w-full p-4 text-right text-gray-500">
                <button className="w-full md:w-2/3 focus:outline-none mr-4 bg-blue-400 hover:bg-indigo-500 text-white font-bold xl:text-base md:text-base border border-gray-300 w-full text-sm py-2.5 outline-blue-500 rounded">
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
export default MaintenanceSchedule;
