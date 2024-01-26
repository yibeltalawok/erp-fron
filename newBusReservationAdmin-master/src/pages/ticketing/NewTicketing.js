import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { addItem } from "../../states/actions/lostItemAction";
import { newTicketing } from "../../states/actions/ticketingAction";
import Datepicker from "react-tailwindcss-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { viewBus } from "../../states/actions/busAction";
import { viewRoutes } from "../../states/actions/routeAction";
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

const NewTicketing = () => {
  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (ticketData) => {
    // pass the data form data
    const formData = new FormData();
    Object.entries(ticketData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    let newDate = moment(ticketData).format("yyyy-MM-DD");
    const newData = {
      ...ticketData,
      passengerId: "2",
      reservationDate: newDate,
    };
    // dispatch
    dispatch(newTicketing(newData));
  };
  const buses = useSelector((state) => state.buses);
  // use effect
  useEffect(() => {
    dispatch(viewBus());
  }, []);
  const routes = useSelector((state) => state.routes);
  // use effect
  useEffect(() => {
    dispatch(viewRoutes());
  }, []);
  const tickets = useSelector((state) => state.tickets);
  if (tickets?.success == true) {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const [showLogin, setShowLogin] = useState(false);
  // if (userInfo == null) {
  //   navigate("/login");
  // }

  return (
    <Layout>
      <Box className="py-24 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <Typography variant="h6">Book Now</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className=" space-y-2 shadow">
              <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-6 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans"> Bus Talga</Typography>
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
                          maxLength: 7,
                        })}
                      >
                        {buses?.buses?.map((item) => (
                          <MenuItem key={item?.id} value={item?.id}>
                            {item?.talga}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </div>
                  {errors.busId && (
                    <p className="text-red-500">Bus talga is required!</p>
                  )}
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-6 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Route</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                       variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`terminalId`, {
                          required: true,
                          maxLength: 7,
                        })}
                      >
                        {routes?.routes?.map((item) => (
                          <MenuItem key={item?.id} value={item?.id}>
                            {item?.destinationStation?.stationName}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </div>
                  {errors.terminalId && (
                    <p className="text-red-500">
                      destination station is required!
                    </p>
                  )}
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Seat Number</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        label="01, 02, ..24"
                        {...register(`seatNumber`, {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                    </div>
                    {errors.seatNumber && (
                      <p className="text-red-500">seat number is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Schedule Time</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <Controller
                        name="reservationDate"
                        control={control}
                        render={({ field }) => (
                          <Datepicker
                            class="w-full focus:outline-none focus:text-gray-600 p-2"
                            placeholderText="1:30 PM"
                            {...field}
                            Selected={field.value}
                            onChange={(reservationDate) =>
                              field.onChange(reservationDate)
                            }
                            asSingle={true}
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
              <Divider />
              <div class="w-full p-4 text-right text-gray-500">
                {userInfo ? (
                  <button className="w-full md:w-2/3 focus:outline-none mr-4 bg-blue-400 hover:bg-indigo-500 text-white font-bold xl:text-base md:text-base border border-gray-300 w-full text-sm py-2.5 outline-blue-500 rounded">
                    Save
                  </button>
                ) : (
                  <button
                    className="w-full md:w-2/3 focus:outline-none mr-4 bg-blue-400 hover:bg-indigo-500 text-white font-bold xl:text-base md:text-base border border-gray-300 w-full text-sm py-2.5 outline-blue-500 rounded"
                    onClick={() => setShowLogin(true)}
                  >
                    Save
                  </button>
                )}
              </div>
            </Paper>
          </form>
        </div>
      </Box>
      <ToastContainer />
    </Layout>
  );
};
export default NewTicketing;
