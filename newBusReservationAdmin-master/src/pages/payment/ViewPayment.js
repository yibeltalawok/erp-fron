import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";

import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { viewPayment, deletePayment } from "../../states/actions/paymentAction";
import Layout from "../../pages/layout/Layout";
// Payment List component
const ViewPayment = () => {
  const navigate = useNavigate();
  const handleUpdatePayment = (data) => {
    navigate("/payment/" + data.id);
  };
  // use effect
  useEffect(() => {
    dispatch(viewPayment());
  }, []);

  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments);
  function handleRemovePayment(data) {
    if (
      window.confirm(
        "Data deleted permantly. Are you sure to delete completely!"
      )
    ) {
      dispatch(deletePayment(data.id));
    }
    if (payments?.success == false) {
      setTimeout(function () {
        window.location.reload();
      }, 500);
    }
  }
  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
        <Grid item xs={12} md={6} lg={8} className="mt-5">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5">Payment transaction</Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Table
              data={payments?.payments}
              fields={paymentColumns}
              numberOfRows={payments?.payments?.length}
              enableTopToolBar={true}
              enableBottomToolBar={true}
              enablePagination={true}
              enableRowSelection={false}
              enableColumnFilters={false}
              enableEditing={true}
              enableColumnDragging={false}
              showPreview={true}
              deleteFunction={handleRemovePayment}
              upDatefunction={handleUpdatePayment}
            />
          </Box>
        </Grid>
      </Box>
    </Layout>
  );
};
export default ViewPayment;
export const paymentColumns = [
  {
    accessorKey: "Driver.name", //access nested data with dot notation
    header: "Driver Name",
  },
  {
    accessorKey: "association.associationName", //access nested data with dot notation
    // accessorKey: "Driver.name", //access nested data with dot notation

    header: "Association Name",
  },
  {
    accessorKey: "Station.stationName", //access nested data with dot notation
    //  accessorKey: "Driver.name", //access nested data with dot notation
    header: "Station Name",
  },
  {
    accessorKey: "paymentDate",
    header: "Payment Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];
