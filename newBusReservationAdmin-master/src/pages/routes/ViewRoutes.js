import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import Table from "../../components/Table";
import { viewRoutes, deleteRoute } from "../../states/actions/routeAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "../../pages/layout/Layout";

const ViewRoutes = () => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const routes = useSelector((state) => state.routes);
  // console.log("All Route: ", routes);
  // use effect
  useEffect(() => {
    dispatch(viewRoutes());
  }, []);
  const navigate = useNavigate();
  const handleUpdateBusOwner = (data) => {
    navigate("/updateRoute/" + data.id);
  };
  function handleRemoveBusOwner(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deleteRoute(data.id));
    }
    if (routes?.success == false) {
      setTimeout(function () {
        window.location.reload();
      }, 3000);
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
          <Typography variant="h6">All Routes</Typography>
        </Box>
        <Table
          data={routes?.routes}
          fields={routeColumns}
          numberOfRows={routes?.routes?.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={true}
          enableColumnFilters={true}
          enableEditing={true}
          enableColumnDragging={true}
          showPreview={true}
          //  routeLink="products"
          deleteFunction={handleRemoveBusOwner}
          upDatefunction={handleUpdateBusOwner}
        />
      </Box>
      <ToastContainer />
    </Layout>
  );
};
export default ViewRoutes;

export const routeColumns = [
  {
    accessorKey: "destinationStation.stationName",
    header: "Source Station",
  },
  //sourceStation
  {
    accessorKey: "sourceStation.stationName", //access nested data with dot notation
    header: "Destination",
  },
  {
    accessorKey: "distance", //access nested data with dot notation
    header: "Distance",
  },
  {
    accessorKey: "cost", //access nested data with dot notation
    header: "Cost",
  },
];
