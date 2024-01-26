import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { registerBus } from "../../../states/actions/busAction";
import {viewBusOwner} from "../../../states/actions/busOwnerAction";
import { viewAssociation } from "../../../states/actions/associationAction";
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
// add new Employee
const NewBus = () => {
  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const association = useSelector((state) => state.association);

  const busOwner = useSelector((state) => state.busOwner);

  // use effect
  // use effect
  useEffect(() => {
    dispatch(viewBusOwner());
  }, []);
  useEffect(() => {
    dispatch(viewAssociation());
  }, []);

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    // dispatch
    dispatch(registerBus(data));
  };
  const buses = useSelector((state) => state.buses);
  if (buses?.success == true) {
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
              <Typography variant="h6"> Bus Register</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Paper class="bg-white space-y-0">
              <Divider />
              <div class="md:inline-flex w-full md:space-y-0 p-2 text-gray-500 items-center">
            <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  align="center"
                >License Plate
                </Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      label="enter license palate"
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`licensePlate`, {
                          required: true,
                          maxLength: 200,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="FBY-698"
                      />
                    </Box>
                    {errors.licensePlate && (
                      <p className="text-red-500">license plate is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />

              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-2 text-gray-500 items-center">
             <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  align="center"
                >Bus Owner</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`busOwnerId`, {
                          maxLength: 700,
                        })}
                      >
                        {busOwner?.busOwner?.map((owner) => (
                          <MenuItem
                            key={owner.busOwnerId}
                            value={owner.busOwnerId}
                          >
                            {owner.firstName}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    {errors.busOwnerId && (
                      <p className="text-red-500">Bus owner is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-2 text-gray-500 items-center">
                                <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  align="center"
                >Model</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      label="enter model"
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register(`model`, {
                          required: true,
                          maxLength: 200,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="bus model e.g 21"
                      />
                    </Box>
                    {errors.model && (
                      <p className="text-red-500">Model is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-2 md:space-y-0  w-full p-2 text-gray-500 items-center">
                <Typography class="md:w-2/12 mx-auto max-w-sm">Capacity</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <TextField
                        name="capacity"
                        type="text"
                        {...register(`capacity`, {
                          required: true,
                          maxLength: 200,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="number of seats e.g 80"
                      />
                    </div>
                    {errors.capacity && (
                      <p className="text-red-500">Capacity is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-2 text-gray-500 items-center">
                <Typography class="md:w-2/12 mx-auto max-w-sm">Side No.</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <TextField
                        type="text"
                        {...register("sideNo", {
                          required: true,
                          maxLength: 200,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="A670"
                      />
                    </div>
                    {errors.sideNo && (
                      <p className="text-red-500">Side number is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full md:space-y-0 p-2 text-gray-500 items-center">
              <Typography
                  className="md:w-3/12 max-w-sm mx-auto sans"
                  align="center"
                >Talga</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        {...register("talga", {
                          required: true,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="76889"
                      />
                    </div>
                    {errors.talga && (
                      <p className="text-red-500">Talga is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-2 text-gray-500 items-center">
                <Typography class="md:w-2/12 mx-auto max-w-sm">Bus level</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        {...register(`level`, {
                          required: true,
                          maxLength: 30,
                        })}
                      >
                        <MenuItem value="1">level-1</MenuItem>
                        <MenuItem value="2">level-2</MenuItem>
                        <MenuItem value="3">level-3</MenuItem>
                      </Select>
                    </Box>
                    {errors.level && (
                      <p className="text-red-500">Bus level is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-2 text-gray-500 items-center">
                <Typography class="md:w-2/12 mx-auto max-w-sm">Price</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                        type="text"
                        {...register("price", {
                          required: true,
                        })}
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        placeholder="12,546.54"
                      />
                    </Box>
                    {errors.price && (
                      <p className="text-red-500">Price is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-2 text-gray-500 items-center">
                <Typography class="md:w-2/12 mx-auto max-w-sm">Association</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                        class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                        {...register(`associationId`, {
                          required: true,
                          maxLength: 2000,
                        })}
                      >
                        {association?.association?.map((assocation) => (
                          <MenuItem
                            key={assocation.associationId}
                            value={assocation.associationId}
                          >
                            {assocation.associationName}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    {errors.associationId && (
                      <p className="text-red-500">
                        assocation name is required!
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="w-full p-4 text-right text-gray-500">
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
export default NewBus;
// https://eplus.abyssiniasoftware.com/api-docs/bus

// ማርሸት, [25/01/2024 10:45 AM]
// "licensePlate": "ABC123", 
//   "model": "Example Model", 
//   "capacity": 50, 
//   "talga": "Some Talga", 
//   "sideNo": "Some Side Number", 
//   "level": 2, 
//   "status": "Active", 
//   "insurance": "ABC123XYZ", 
//   "ownerId": 2, 
//   "associationId": 3, 
//   "driverId": 4 
// }

// https://eplus.abyssiniasoftware.com/api-docs/assignation/