import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";
import {
  ViewBusOwners,
  AddBusOwner,
  UpdateBusOwner,
  ViewMaintenace,
  UpdateMaintenance,
  MaintenanceSchedule,
  UpdateAssociation,
  NewAssociation,
  AllAssociation,
  AllBus,
  NewBus,
  UpdateBus,
  AllEmployee,
  NewEmployee,
  UpdateEmployee,
  ViewLostitem,
  NewLostitem,
  UpdateLostitem,
  NewRoute,
  ViewRoutes,
  UpdateRoute,
  ViewTracking,
  AddFeedback,
  AllFeedBack,
  UpdateFeedBacks,
  ViewStation,
  NewStation,
  UpdateStation,
  AllPassenger,
  UpdatePassenger,
  AddPassenger,
  AllAssigned,
  UpdateAssign,
  AssignBus,
  NewTicketing,
  ViewTicketing,
  SendMessage,
  ScheduleChange,
  ViewPromotion,
  ViewPayment,
  AddPayment,
  UpdatePayment,
  NewDriver,
  AllDriver,
  UpdateDriver,
  NewAccident,
  UpdateAccident,
  ViewAccident,
  NewPunishment,
  UpdatePunishment,
  ViewPunishment,
  Login,
} from "./pages";

import Footer from "./components/common/Footer";
import UpdateTicketing from "./pages/ticketing/UpdateTicketing";
import ProtectedRoutes from "./pages/protectedRoutes/ProtectedRoutes";

function App() {
  var hours = 1; // to clear the localStorage after 1 hour
  // (if someone want to clear after 8hrs simply change hours=8)
  var now = new Date().getTime();
  var setupTime = localStorage.getItem("setupTime");
  if (setupTime == null) {
    localStorage.setItem("setupTime", now);
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.clear();
      localStorage.setItem("setupTime", now);
    }
  }
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/newEmployee" element={<NewEmployee />} />
        {/* <Route element={<ProtectedRoutes />}> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/allBusOwners" element={<ViewBusOwners />} />
          <Route path="/addBusOwner" element={<AddBusOwner />} />
          <Route path="/BusOwner/:id" element={<UpdateBusOwner />} />

          <Route path="/maintenanceList" element={<ViewMaintenace />} />
          <Route path="/addMaintenance" element={<MaintenanceSchedule />} />
          <Route path="/maintenance/:id" element={<UpdateMaintenance />} />

          <Route path="/AllAssociation" element={<AllAssociation />} />
          <Route path="/addAssociation" element={<NewAssociation />} />
          <Route path="/association/:id" element={<UpdateAssociation />} />

          <Route path="/AllBuses" element={<AllBus />} />
          <Route path="/newBus" element={<NewBus />} />
          <Route path="/buses/:id" element={<UpdateBus />} />

          <Route path="/allEmployee" element={<AllEmployee />} />

          <Route path="/employee/:id" element={<UpdateEmployee />} />

          <Route path="/allLostItem" element={<ViewLostitem />} />
          <Route path="/newLostItem" element={<NewLostitem />} />
          <Route path="/lostItem/:id" element={<UpdateLostitem />} />

          <Route path="/sendMessage" element={<SendMessage />} />
          <Route path="/scheduleChange" element={<ScheduleChange />} />
          <Route path="/viewPromotion" element={<ViewPromotion />} />

          <Route path="/newRoute" element={<NewRoute />} />
          <Route path="/allRoutes" element={<ViewRoutes />} />
          <Route path="/updateRoute/:id" element={<UpdateRoute />} />

          <Route path="/viewTracking" element={<ViewTracking />} />

          <Route path="/NewStation" element={<NewStation />} />
          <Route path="/ViewStation" element={<ViewStation />} />
          <Route path="/station/:id" element={<UpdateStation />} />

          <Route path="/addPAssenger" element={<AddPassenger />} />
          <Route path="/allPassenger" element={<AllPassenger />} />
          <Route path="/passenger/:id" element={<UpdatePassenger />} />

          <Route path="/allFeedback" element={<AllFeedBack />} />
          <Route path="/addFeedback" element={<AddFeedback />} />
          <Route path="/feedBack/:id" element={<UpdateFeedBacks />} />

          <Route path="/allAssign" element={<AllAssigned />} />
          <Route path="/newAssign" element={<AssignBus />} />
          <Route path="/assign/:id" element={<UpdateAssign />} />

          <Route path="/viewPayment" element={<ViewPayment />} />
          <Route path="/newPayment" element={<AddPayment />} />
          <Route path="/payment/:id" element={<UpdatePayment />} />

          <Route path="/allDriver" element={<AllDriver />} />
          <Route path="/newDriver" element={<NewDriver />} />
          <Route path="/driver/:id" element={<UpdateDriver />} />

          <Route path="/allTicketing" element={<ViewTicketing />} />
          <Route path="/newTicketing" element={<NewTicketing />} />
          <Route path="/ticketing/:id" element={<UpdateTicketing />} />

          <Route path="/allAccident" element={<ViewAccident />} />
          <Route path="/newAccident" element={<NewAccident />} />
          <Route path="/accident/:id" element={<UpdateAccident />} />

          <Route path="/allPunishment" element={<ViewPunishment />} />
          <Route path="/newPunishment" element={<NewPunishment />} />
          <Route path="/punishment/:id" element={<UpdatePunishment />} />
        {/* </Route> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
