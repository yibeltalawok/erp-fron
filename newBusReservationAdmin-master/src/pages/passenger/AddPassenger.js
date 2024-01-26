import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { registerPassenger } from "../../states/actions/passengerAction";
import { ToastContainer } from "react-toastify";
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
//  Passenger registration component
const NewPassenger = () => {
  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const passenger = useSelector((state) => state.passenger);
  const onSubmit = (data) => {
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    // dispatch
    dispatch(registerPassenger(data));
    if (passenger?.success == true) {
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <Layout>
      <Box className="py-24 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <Typography variant="h6">Register Passenger</Typography>
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
                        label="e.g abebe"
                        {...register(`name`, {
                          required: true,
                          maxLength: 40,
                          pattern: /[a-zA-Z]+$/,
                        })}
                      />
                    </Box>
                    {errors.name && (
                      <p className="text-red-500">
                        Name is required and write text only!
                      </p>
                    )}
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
                          required: true,
                          maxLength: 50,
                        })}
                        label="enter contact number"
                      />
                    </Box>
                    {errors.contactNumber && (
                      <p className="text-red-500">
                        Contact number is required!
                      </p>
                    )}
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
                        label="e.g 60"
                        {...register("age", {
                          required: true,
                          maxLength: 3,
                        })}
                      />
                    </div>
                    {errors.age && (
                      <p className="text-red-500">age is required!</p>
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
                          required: true,
                        })}
                      >
                        <MenuItem value="male">male</MenuItem>
                        <MenuItem value="female">female</MenuItem>
                      </Select>
                    </div>
                    {errors.gender && (
                      <p className="text-red-500">Gender is required!</p>
                    )}
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
                          required: true,
                        })}
                      />
                    </div>
                    {errors.password && (
                      <p className="text-red-500">password is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="w-full pb-2 pt-4 text-right text-gray-500">
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
export default NewPassenger;
