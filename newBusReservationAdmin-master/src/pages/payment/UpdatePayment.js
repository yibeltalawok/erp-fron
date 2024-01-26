import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import {
  singlePayment,
  updatePayment,
} from "../../states/actions/paymentAction";
import { viewAssociation } from "../../states/actions/associationAction";
import { viewDriver } from "../../states/actions/driverAction";
import { useParams } from "react-router-dom";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
const UpdatePayment = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // use form
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
    watch,
  } = useForm();
  // use effect
  useEffect(() => {
    onReset();
  }, []);
  const onReset = async () => {
    const result = await dispatch(singlePayment(id));
    reset(result.payload);
  };
  const association = useSelector((state) => state.association);
  const stations = useSelector((state) => state.stations);
  const driver = useSelector((state) => state.driver);
  // use effect
  useEffect(() => {
    dispatch(viewAssociation());
    dispatch(viewDriver());
  }, []);

  const onSubmit = (data) => {
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      formData.append(key, value);
    });
    const newData = {
      ...data,
      paymentDate: data.date,
    };
    dispatch(updatePayment(newData));
  };
  return (
    <Layout>
      <Box className="py-24 h-screen">
        <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
          <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
            <div class="max-w-sm mx-auto md:w-full md:mx-0">
              <div class="inline-flex items-center space-x-4">
                <Typography variant="h6">Update Payment Detail</Typography>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Paper className=" space-y-2 shadow">
          <Divider />
              <div class="md:inline-flex w-full md:space-y-0 p-3 text-gray-700 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Association</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                     {...register(`associationId`,{
                        })}
                      >
                        {association?.association?.map((association) => (
                          <MenuItem
                            key={association.associationId}
                            value={association.associationId}
                          >
                          {association.associationName}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </div>
                </div>
              </div>
             <Divider />
              <div class="md:inline-flex w-full space-y-2 md:space-y-0 p-3 text-gray-700 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Driver</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`driverId`,{
                        })}
                      >
                        {driver?.driver?.map((driv) => (
                          <MenuItem key={driv.id} value={driv.id}>
                            {driv.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </div>
                </div>
              </div>
             <Divider />
              <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-3 text-gray-700 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Station</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Select
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`stationId`,{
                        })}
                      >
                        {stations?.stations?.map((station) => (
                          <MenuItem key={station.id} value={station.id}>
                            {station.stationName}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </div>
                </div>
              </div>
             <Divider />
              <div class="md:inline-flex w-full md:space-y-0 p-3 text-gray-700 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Amount</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <TextField
                      variant="outlined"
                        size="small"
                        fullWidth
                        type="text" 
                        {...register(`amount`, {
                          
                          // pattern: /^[a-zA-Z]+$/,
                        })}
                      />
                    </Box>
                  </div>
                </div>
              </div>
             <Divider />
              <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-3 text-gray-700 items-center">
                <Typography className="md:w-3/12 max-w-sm mx-auto sans">Date</Typography>
                <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
                  <div>
                    <Box class="w-full inline-flex border">
                      <Controller
                        name="paymentDate"
                        control={control}
                        render={({ field }) => (
                          <Datepicker
                          class="w-full focus:outline-none text-base focus:text-gray-600 p-4"
                            {...field}
                            Selected={field.value}
                            onChange={(paymentDate) =>
                              field.onChange(paymentDate)
                            }
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
export default UpdatePayment;
