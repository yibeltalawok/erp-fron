import styled from "@emotion/styled";
import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { lineChartData, lineChartOptions } from "../../../data/chartData";
import { stats } from "../../../data/stats";
import LineChart from "../charts/LineChart";
import { FiShoppingBag, FiUsers } from "react-icons/fi";
import {ViewStatistics} from "../../../states/actions/statisticsAction"
import { BsCurrencyDollar } from "react-icons/bs";
import bus from "../../../assets/images/statsImg/Bus.jpg"
import owner from "../../../assets/images/statsImg/busowner.svg"
import employImg from "../../../assets/images/statsImg/employee.svg"
import stationImg from "../../../assets/images/statsImg/station1.jpg"
import routerImg from "../../../assets/images/statsImg/router.jpeg"
import associationImg from "../../../assets/images/statsImg/Association.svg"

import BaseStats from "./baseStats"
// import {
//   FaBusAlt,
//   FaUsers,
//   FaRegBuilding,
//   FaCarCrash,
//   FaOpencart,
//   FaRoute,
//   FaTicketAlt,
//   FaSearchLocation,
//   FaWheelchair,
//   FaMarker,
//   FaPenSquare,
//   FaCcAmazonPay,
// } from "react-icons/fa";
const Stats = () => {
  const Item = styled(Paper)({
    padding: "5px 10px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });
  const statstics = useSelector((state) => state.statstics);
  console.log("statistics",statstics?.statstics)
  const dispatch=useDispatch()
  // use effect
  useEffect(() => {
    dispatch(ViewStatistics());
   },[]);
  return (
      
    <div className=" md:flex block gap-x-5 w-full md:pr-5 pr-1 md:space-y-0 space-y-3">
        <div className="flex md:w-[50%] w-full space-x-3">
            <BaseStats totalNo={statstics?.statstics.stations} image={stationImg} name="Stations"/>
            <BaseStats totalNo={statstics?.statstics.terminals} image={routerImg} name="Routers"/>
            <BaseStats totalNo={statstics?.statstics.associations} image={associationImg} name="Associations"/>
       </div>
       <div className=" flex md:w-[50%] w-full space-x-3">
            <BaseStats totalNo={statstics?.statstics.buses} image={bus} name="Buses"/>
            <BaseStats totalNo={statstics?.statstics.busOwners} image={owner} name="Busowners"/>
            <BaseStats totalNo={statstics?.statstics.employees} image={employImg} name="Employees"/>
       </div>
    </div>
  );
};

export default Stats;
