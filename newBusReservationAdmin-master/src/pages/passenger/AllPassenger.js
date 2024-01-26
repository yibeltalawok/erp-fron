import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Table from "../../components/Table";
import {
  viewPassenger,
  deletePassenger,
} from "../../states/actions/passengerAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";
const AllPassenger = () => {
  // dispatch
  const dispatch = useDispatch();
  // useSelectors
  const passenger = useSelector((state) => state.passenger);
  // use effect
  useEffect(() => {
    dispatch(viewPassenger());
  }, []);

  const navigate = useNavigate();
  //update passenger funcion
  const handleUpdatePassenger = (data) => {
    navigate("/passenger/" + data.id);
  };
  //delete passenger funcion
  function handleRemovePassenger(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deletePassenger(data.id));
    }
    if (passenger?.success == false) {
      setTimeout(function () {
        window.location.reload();
      }, 500);
    }
  }
  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <Typography variant="h6">Passenger</Typography>
        </Box>
        <Table
          data={passenger?.passenger}
          fields={passengerColumns}
          numberOfRows={passenger?.passenger?.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          deleteFunction={handleRemovePassenger}
          upDatefunction={handleUpdatePassenger}
        />
      </Box>
      <ToastContainer />
    </Layout>
  );
};

export default AllPassenger;

export const passengerColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "contactNumber",
    header: "Contact Number",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
];
