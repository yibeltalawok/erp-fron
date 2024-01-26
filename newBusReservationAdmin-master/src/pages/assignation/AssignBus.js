import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { registerAssignation } from "../../states/actions/assignationAction";
import { viewBus } from "../../states/actions/busAction";
import { viewRoutes } from "../../states/actions/routeAction";
import { viewDriver } from "../../states/actions/driverAction";
import { ToastContainer } from "react-toastify";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Register from "../../components/button/registerButton";
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
const AssignBus = () => {
  // use form
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  //  useSelector
  const buses = useSelector((state) => state.buses);
  const routes = useSelector((state) => state.routes);
  const driver = useSelector((state) => state.driver);
  // use effect
  useEffect(() => {
    dispatch(viewBus());
    dispatch(viewDriver());
    dispatch(viewRoutes());
  }, []);
  useEffect(() => {}, []);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    dispatch(registerAssignation(data));
  };
  const assignation = useSelector((state) => state.assignation);
  if (assignation?.success == true) {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }
  return (
    <Layout>
      <Box className="py-24 h-screen">
        <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
           <Typography variant="h6">Bus Assignation</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className=" space-y-2 shadow pl-3">
              <Divider />
              <div className="md:inline-flex w-full md:space-y-0 p-3 text-gray-500 items-center">
                <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  
                >
                Bus
                </Typography>
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
                        })}
                      >
                        {buses?.buses?.map((bus) => (
                          <MenuItem key={bus.id} value={bus.id}>
                            {bus.talga}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    {errors.busId && (
                      <p className="text-red-500">Bus is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full md:space-y-1 space-y-1 md:pt-2 pt-1 p-4 text-gray-700 items-center">
             <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  >
                  Driver</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                  <Box class="w-full inline-flex border">
                      <Select
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`driverId`, {
                          required:true
                        })}
                      >
                        {driver?.driver?.map((driv) => (
                          <MenuItem key={driv.id} value={driv.id}>
                            {driv.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    {errors.driverId && (
                      <p className="text-red-500">driver is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full md:space-y-1 space-y-1 md:pt-2 pt-1 p-4 text-gray-700 items-center">
              <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  
                >Router</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`routeId`, {
                          required:true
                        })}
                      >
                        {routes?.routes?.map((route) => (
                          <MenuItem key={route.id} value={route.id}>
                            {route.sourceStation?.stationName}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    {errors.routeId && (
                      <p className="text-red-500">route is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full md:space-y-1 space-y-1 md:pt-2 pt-1 p-4 text-gray-700 items-center">
            <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  
                >Type</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                    <TextField
                        label="enter type"
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`assignationType`, {
                          required: true,
                          maxLength: 200,
                        })}
                        placeholder="assignation type..."
                      />
                    </Box>
                    {errors.assignationType && (
                      <p className="text-red-500">Please enter association type!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full md:space-y-1 space-y-1 md:pt-2 pt-1 p-4 text-gray-700 items-center">
            <Typography 
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  
                >Starting Time</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                  <Box class="w-full inline-flex border">
                      <Controller
                        name="startTime"
                        control={control}
                        render={({ field }) => (
                          <Datepicker
                          class="w-full focus:outline-none text-base focus:text-gray-600 p-4"
                            placeholderText="eg. January 8, 2024 7:15 PM"
                            {...field}
                            selected={field.value}
                            onChange={(startTime) => field.onChange(startTime)}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeIntervals={15}
                          />
                        )}
                      />
                    </Box>
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full md:space-y-1 space-y-1 md:pt-2 pt-1 p-4 text-gray-700 items-center">
             <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  
                >Ending Time</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Controller
                        name="endTime"
                        control={control}
                        render={({ field }) => (
                          <Datepicker
                            class="w-full focus:outline-none text-base focus:text-gray-600 p-4"
                            placeholderText="eg.January 8, 2024 8:15 PM"
                            {...field}
                            selected={field.value}
                            onChange={(endTime) => field.onChange(endTime)}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeIntervals={15}
                          />
                        )}
                      />
                    </Box>
                  </div>
                </div>
              </div>
              <Divider />
              <div class="w-full pb-2 pt-3 text-right text-gray-500">
                <Register btnName="Save" />
              </div>
            </Paper>
          </form>
        </div>
      </Box>
      <ToastContainer />
    </Layout>
  );
};
export default AssignBus;