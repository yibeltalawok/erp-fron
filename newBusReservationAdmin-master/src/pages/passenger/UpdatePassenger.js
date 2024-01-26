import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import {
  updatePassenger,
  singlePassenger,
} from "../../states/actions/passengerAction";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";
import Register from "../../components/button/registerButton";
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
// Passenger update component
const UpdatePassengers = () => {
  const { id } = useParams();
  // dispatch
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
  //  reset function
  const onReset = async () => {
    const result = await dispatch(singlePassenger(id));
    reset(result.payload.passenger);
  };
  const onSubmit = (data) => {
    console.log("updaye pass==", data);
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    // dispatch
    dispatch(updatePassenger(data));
  };
  return (
    <Layout>
      <Box className="py-24 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <Typography variant="h6">Update Passenger Details</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className=" space-y-2 shadow">
              <Divider />
              <div class="md:inline-flex w-full space-y-1 p-3 text-gray-700 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Name</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`name`, {
                          maxLength: 40,
                          pattern: /[a-zA-Z]+$/,
                        })}
                      />
                    </Box>
                  </div>
                </div>
              </div>
              <Divider />

              <div class="md:inline-flex w-full space-y-1 p-3 text-gray-700 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Contact Number</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                         {...register("contactNumber", {
                          maxLength: 50,
                        })}
                      />
                    </Box>
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-1 p-3 text-gray-700 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Age</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <TextField
                        type="number"
                        variant="outlined"
                        size="small"
                        fullWidth
                        {...register("age", {
                          maxLength: 3,
                        })}
                      />
                    </div>
                    {errors.age && (
                      <p className="text-red-500">enter correct age!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-1 p-3 text-gray-700 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Gender</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <Select
                      type="number"
                        variant="outlined"
                        size="small"
                        fullWidth
                        {...register("gender", {
                        })}
                      >
                        <MenuItem value="male">male</MenuItem>
                        <MenuItem value="female">female</MenuItem>
                      </Select>
                    </div>

                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full space-y-1 p-3 text-gray-700 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Password</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <TextField
                        type="password"
                        variant="outlined"
                        size="small"
                        fullWidth
                        {...register("password", {
                        })}
                      />
                    </div>

                  </div>
                </div>
              </div>
              <Divider />
              <div class="w-full pb-2 pt-4 text-right text-gray-500">
                <Register btnName="Save Change" />
              </div>
            </Paper>
          </form>
        </div>
      </Box>
      <ToastContainer />
    </Layout>
  );
};
export default UpdatePassengers;
