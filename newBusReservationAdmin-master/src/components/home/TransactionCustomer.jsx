import { Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import { customers } from "../../data/customers";
import { transactions, transactionsColumns } from "../../data/transactions";
import Table from "../Table";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {viewPayment} from "../../states/actions/paymentAction";
  
const TransactionCustomer = () => {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments);
  const latestData = payments?.payments.slice((payments?.payments?.length)-5,payments?.payments?.length);
     console.log(latestData)
     useEffect(()=>{
      dispatch(viewPayment())
     },[])
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
        <Paper
          sx={{
            boxShadow: "none !important",
            borderRadius: "12px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "divider",

            padding: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" sx={{ pb: 1 }}>
              New Customer List
            </Typography>
            <FaEllipsisH />
          </Box>
          <Divider />
          <Box sx={{ marginTop: 1 }}>
            {customers
              .slice(0, 4)
              .map(({ customer_id, customer_name, email, img }) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "10px 0",
                  }}
                  key={customer_id}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Avatar src={img} sx={{ width: 30, height: 30 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: "18px" }}>
                        {customer_name}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ opacity: 0.7 }}>
                        {email}
                      </Typography>
                    </Box>
                  </Box>
                  <FaEllipsisH />
                </Box>
              ))}
          </Box>
          <Divider />
          <Typography variant="subtitle1" sx={{ textAlign: "center", mt: 1 }}>
            <Link to="/customers" className="link">
              View more
            </Link>
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Transaction List</Typography>
          <FaEllipsisH />
        </Box>
        <Box sx={{ mt: 2 }}>
        <Table
            data={latestData}
            fields={paymentColumns}
            numberOfRows={latestData?.length}
            enableTopToolBar={false}
            enableBottomToolBar={false}
            enablePagination={false}
            enableRowSelection={false}
            enableColumnFilters={false}
            enableEditing={false}
            enableColumnDragging={false}
            showPreview={true}
              />
        </Box>
        <Typography variant="subtitle1" sx={{ textAlign: "center", mt: 2 }}>
          <Link to="/viewPayment" className="link">
            View all transactions
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TransactionCustomer;
export const paymentColumns = [
  {
      accessorKey: "Driver.name", //access nested data with dot notation
      header: "Driver name",
    },
    {
     accessorKey: "association.associationName", //access nested data with dot notation
    // accessorKey: "Driver.name", //access nested data with dot notation

      header: "Association name",
    },
    {
     accessorKey: "Station.stationName", //access nested data with dot notation
  //  accessorKey: "Driver.name", //access nested data with dot notation

      header: "Station name",
    },
    {
      accessorKey: "paymentDate", 
      header: "Payment date",
    },
    {
      accessorKey: "amount", 
      header: "Amount",
    },

];


