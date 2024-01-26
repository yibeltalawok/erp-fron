import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Table from "../../../components/Table";
import { viewBus, deleteBus } from "../../../states/actions/busAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Layout from "../../../pages/layout/Layout";
const AllBus = () => {
  // dispatch
  const dispatch = useDispatch();

  const buses = useSelector((state) => state.buses);
  // use effect
  useEffect(() => {
    dispatch(viewBus());
  }, []);

  const navigate = useNavigate();

  const handleUpdateBus = (data) => {
    navigate("/buses/" + data.id);
  };
  function handleRemoveBus(data) {
    //console.log("id : ", id);
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteBus(data.id));
    }
    if (buses?.success == false) {
      setTimeout(function () {
        window.location.reload();
      }, 500);
      //  console.log("handle ondelet true");
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
          <Typography variant="h6">Bus</Typography>
          <Link to="/newBus" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FiPlus />}
              sx={{ borderRadius: "5px" }}
            >
              Add Bus
            </Button>
          </Link>
        </Box>
        <Table
          data={buses?.buses}
          fields={busColumns}
          numberOfRows={buses?.buses?.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          //  routeLink="products"
          deleteFunction={handleRemoveBus}
          upDatefunction={handleUpdateBus}
        />
      </Box>
    </Layout>
  );
};

export default AllBus;

export const busColumns = [
  {
    accessorKey: "licensePlate", //access nested data with dot notation
    header: "License Plate",
  },
  {
    accessorKey: "model", //access nested data with dot notation
    header: "Model",
  },
  {
    accessorKey: "capacity", //access nested data with dot notation
    header: "Capacity",
  },
  {
    accessorKey: "sideNo", //access nested data with dot notation
    header: "Side Number",
  },
  {
    accessorKey: "talga", //access nested data with dot notation
    header: "Talga",
  },
  {
    accessorKey: "level", //access nested data with dot notation
    header: "Level",
  },
];
