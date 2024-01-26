import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BarChart from "../components/home/charts/BarChart";
import Stats from "../components/home/stats/Stats";
import TransactionCustomer from "../components/home/TransactionCustomer";
import Table from "../components/Table";
import { orders, ordersColumns } from "../data/orders";
import { useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
const Dashboard = () => {
  const ComponentWrapper = styled(Box)({
    marginTop: "10px",
    paddingBottom: "10px",
  });
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  console.log("userInfo : ", userInfo);
  //const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  // if (userInfo == null) {
  //   navigate("/login");
  // }
  return (
    <Layout>
      <Box sx={{ pt: "80px", pb: "20px" }}>
        <Typography variant="h6" sx={{ marginBottom: "14px" }}>
          Dashboard
        </Typography>
        <ComponentWrapper>
          <Stats />
        </ComponentWrapper>

        <ComponentWrapper>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <BarChart />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  boxShadow: "none !important",
                  borderRadius: "12px",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  borderColor: "divider",
                  height: "100%",
                }}
              ></Paper>
            </Grid>
          </Grid>
        </ComponentWrapper>
        <ComponentWrapper>
          <TransactionCustomer />
        </ComponentWrapper>

        <ComponentWrapper>
          <Typography variant="h5" sx={{ my: 3 }}>
            Latest Routes
          </Typography>
          <Table
            data={orders}
            fields={ordersColumns}
            numberOfRows={5}
            enableTopToolBar={false}
            enableBottomToolBar={false}
            enablePagination={false}
            enableRowSelection={false}
            enableColumnFilters={false}
            enableEditing={false}
            enableColumnDragging={false}
          />
        </ComponentWrapper>
      </Box>
    </Layout>
  );
};

export default Dashboard;
