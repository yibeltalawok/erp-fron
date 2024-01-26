import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
//import { Link } from "react-router-dom";
import Table from "../../components/Table";
import {
  viewPunishment,
  deletePunishment,
} from "../../states/actions/punishmentAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";

const ViewPunishment = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const punishment = useSelector((state) => state.punishment);
  console.log("punishment data : ", punishment);
  // use effect
  useEffect(() => {
    dispatch(viewPunishment());
  }, []);

  const navigate = useNavigate();
  const handleUpdatepunishment = (data) => {
    navigate("/punishment/" + data.id);
  };
  function handleRemovepunishment(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deletePunishment(data.id));
    }
    if (punishment?.success == false) {
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
          <Typography variant="h6">Punishment List</Typography>
          <Link to="/newPunishment" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FiPlus />}
              sx={{ borderRadius: "5px" }}
            >
              Add Punishment
            </Button>
          </Link>
        </Box>
        <Table
          data={punishment?.punishment}
          fields={punishmentColumns}
          numberOfRows={punishment?.punishment?.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          //  routeLink="products"
          deleteFunction={handleRemovepunishment}
          upDatefunction={handleUpdatepunishment}
        />
      </Box>
      <ToastContainer />
    </Layout>
  );
};

export default ViewPunishment;

export const punishmentColumns = [
  {
    accessorKey: "Bus.talga", //access nested data with dot notation
    header: "Bus Talga",
  },
  {
    accessorKey: "Driver.name", //access nested data with dot notation
    header: "Driver Name",
  },
  {
    accessorKey: "amount", //access nested data with dot notation
    header: "Amount",
  },
  {
    accessorKey: "frequency", //access nested data with dot notation
    header: "Frequency",
  },
  {
    accessorKey: "date", //access nested data with dot notation
    header: "Date",
  },
];
