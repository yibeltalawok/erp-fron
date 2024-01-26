import styled from "@emotion/styled";
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";

const BaseStats = (props) => {
  const Item = styled(Paper)({
    padding: "5px 10px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });

  return (
     <>
     <Box sx={{
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "divider",
        }}
        className=" w-10/12 h-full flex rounded-xl text-center items-center bg-white" >
        <Paper className=" space-y-2 shadow flex flex-col ">
         {/* <LineChart
           chartOptions={lineChartOptions}
           chartData={lineChartData}
         /> */}
         <div>
         <img src={props.image} alt="" className="rounded-md w-full h-full mt-0 bg-slate-300 border-2 border-slate-400"/>
         </div>
         <div>
         <Typography variant="h6" className="text-orange-400 md:text-3xl text-xl font-bold pt-3">
           {props.totalNo}
         </Typography>
         <Typography className="font-semibold p-1 md:text-xl text-sm "> {props.name}</Typography>
         </div>
         </Paper>
       </Box>
       </>
  );
};

export default BaseStats;
