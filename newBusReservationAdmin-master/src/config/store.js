import { configureStore } from "@reduxjs/toolkit";
import busOwnerReducer from "../states/reducers/busOwnerReducer";
import associationReducer from "../states/reducers/associationReducer";
import maintenanceReducer from "../states/reducers/maintenanceReducer";
import communicationReducer from "../states/reducers/communicationReducer";
import employeeReducer from "../states/reducers/employeeReducer";
import busReducer from "../states/reducers/busReducer";
import itemReducer from "../states/reducers/lostitemReducer";
import passegerReducer from "../states/reducers/passengerReducer";
import feedbackReducer from "../states/reducers/feedbackReducer";
import assignationReducer from "../states/reducers/assignationReducer";
import routeReducer from "../states/reducers/routeReducer";
import trackingReducer from "../states/reducers/trackingReducer";
import ticketingReducer from "../states/reducers/ticketingReducer";
import accidentReducer from "../states/reducers/accidentReducer";
import punishmentReducer from "../states/reducers/punishmentReducer";
import paymentReducer from "../states/reducers/paymentReducer";
import statsticsReducer from "../states/reducers/statsticsReducer";
import driverReducer from "../states/reducers/driverReducer";
import stationReducer from "../states/reducers/stationReducer";
const store = configureStore({
  reducer: {
    maintenance: maintenanceReducer,
    busOwner: busOwnerReducer,
    association: associationReducer,
    communications: communicationReducer,
    employee: employeeReducer,
    buses: busReducer,
    itemList: itemReducer,
    routes: routeReducer,
    tracking: trackingReducer,
    passenger: passegerReducer,
    feedback: feedbackReducer,
    assignation: assignationReducer,
    tickets: ticketingReducer,
    accident: accidentReducer,
    punishment: punishmentReducer,
    payments: paymentReducer,
    statstics: statsticsReducer,
    driver: driverReducer,
    stations:stationReducer,
  },
});

export default store;
