import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerFeedback } from "../../states/actions/feedbackAction";
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

} from "@mui/material";
const AddFeedback = () => {
  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // pass the data to form data
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // dispatch
    dispatch(registerFeedback(data));
  };
  const feedback = useSelector((state) => state.feedback);
  if (feedback?.success == true) {
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
              <Typography variant="h6">Register Passenger Feedback</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className=" space-y-2 shadow">
              <Divider />
              <div class="md:inline-flex w-full md:space-y-0 space-y-1 p-3 text-gray-700 items-center">
                <Typography class="md:w-3/12 sans max-w-sm mx-auto">Name</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        label="eg. Worqu"
                        {...register(`name`, {
                          required: true,
                          maxLength: 40,
                          pattern: /[a-zA-Z]+$/,
                        })}
                      />
                    </Box>
                    {errors.name && (
                      <p className="text-red-500">Name is required!</p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full md:space-y-0 space-y-1 p-3 text-gray-700 items-center">
                <Typography class="md:w-3/12 sans max-w-sm mx-auto">Phone</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register("phone", {
                          required: true,
                          pattern: /((^(\+251|0)(9|7)\d{2})-?\d{6})$/,
                        })}
                        label="eg. +251999999999"
                      />
                    </Box>
                    {errors.phone && (
                      <p className="text-red-500">
                        phone number is required and enter only correct inout!
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div class="md:inline-flex w-full md:space-y-0 space-y-1 p-3 text-gray-700 items-center">
                <Typography class="md:w-3/12 sans max-w-sm mx-auto">Comment</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <div class="w-full inline-flex border">
                      <textarea
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        class="w-full "
                        {...register(`comment`, {
                          required: true,
                          maxLength: 1000,
                        })}
                        label="write your comment"
                      ></textarea>
                    </div>
                    {errors.comment && (
                      <p className="text-red-500">
                        Write your comment with 1000 length or less!
                      </p>
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
export default AddFeedback;
