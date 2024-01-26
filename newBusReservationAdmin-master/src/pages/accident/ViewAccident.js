import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import Table from "../../components/Table";
import {
  viewAccident,
  deleteAccident,
} from "../../states/actions/accidentAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";

const ViewAccident = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const accident = useSelector((state) => state.accident);
  console.log("view all accident data :", accident);
  // use effect
  useEffect(() => {
    dispatch(viewAccident());
  }, []);

  const navigate = useNavigate();
  const handleUpdateaccident = (data) => {
    navigate("/accident/" + data.id);
  };
  function handleRemoveaccident(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteAccident(data.id));
    }
    if (accident?.success == false) {
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
          <Typography variant="h6">accident List</Typography>
          <Link to="/newaccident" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FiPlus />}
              sx={{ borderRadius: "5px" }}
            >
              Add accident
            </Button>
          </Link>
        </Box>
        <Table
          data={accident?.accident}
          fields={accidentColumns}
          numberOfRows={accident?.accident?.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          //  routeLink="products"
          deleteFunction={handleRemoveaccident}
          upDatefunction={handleUpdateaccident}
        />
      </Box>
      <ToastContainer />
    </Layout>
  );
};

export default ViewAccident;

export const accidentColumns = [
  {
    accessorKey: "Bus.talga", //access nested data with dot notation
    header: "Bus Talga",
  },
  {
    accessorKey: "Driver.name", //access nested data with dot notation
    header: "Driver Name",
  },
  {
    accessorKey: "place", //access nested data with dot notation
    header: "Place",
  },
  {
    accessorKey: "type", //access nested data with dot notation
    header: "Accident Type",
  },
];
