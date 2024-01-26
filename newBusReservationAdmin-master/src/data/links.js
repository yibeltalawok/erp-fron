import { BsCurrencyDollar } from "react-icons/bs";
import { FiShoppingBag, FiUsers, FiHome } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import {
  FaBusAlt,
  FaUsers,
  FaRegBuilding,
  FaCarCrash,
  FaOpencart,
  FaRoute,
  FaTicketAlt,
  FaSearchLocation,
  FaWheelchair,
  FaMarker,
  FaPenSquare,
  FaCcAmazonPay,
} from "react-icons/fa";

export const links = [
  {
    name: "E+up",
    icon: <FiHome />,
    url: "/",
  },
  {
    name: "Bus Owners",
    icon: <FiUsers />,
    url: "/allBusOwners",
  },

  {
    name: "Maintenance",
    icon: <FaCarCrash />,
    subLinks: [
      {
        name: "Add Maintenance",
        url: "/addMaintenance",
      },
      {
        name: "All Maintenance",
        url: "/maintenanceList",
      },
    ],
  },
  {
    name: "Association",
    icon: <FaRegBuilding />,
    url: "/AllAssociation",
  },
  {
    name: "Bus",
    icon: <FaBusAlt />,
    url: "/AllBuses",
  },
  {
    name: "Driver",
    icon: <FaUsers />,
    subLinks: [
      {
        name: "Add Driver",
        url: "/newDriver",
      },
      {
        name: "Driver List",
        url: "/allDriver",
      },
    ],
  },

  {
    name: "Employee",
    icon: <FaUsers />,
    subLinks: [
      {
        name: "New Employee",
        url: "/newEmployee",
      },
      {
        name: "Employee List",
        url: "/allEmployee",
      },
    ],
  },
  {
    name: "Lost Item",
    icon: <FaOpencart />,
    url: "/AllLostItem",
  },
  {
    name: "Tracking",
    icon: <FaSearchLocation />,
    url: "/viewTracking",
  },
  {
    name: "Route",
    icon: <FaRoute />,
    subLinks: [
      {
        name: "Add Route",
        url: "/newroute",
      },
      {
        name: "View Route",
        url: "/allRoutes",
      },
    ],
  },
  {
    name: "Station",
    icon: <FaWheelchair />,
    subLinks: [
      {
        name: "New Station",
        url: "/NewStation",
      },
      {
        name: "Station List",
        url: "/ViewStation",
      },
    ],
  },
  {
    name: "Passenger",
    icon: <FaWheelchair />,
    subLinks: [
      {
        name: "New Passenger",
        url: "/addPAssenger",
      },
      {
        name: "Passenger List",
        url: "/allPassenger",
      },
    ],
  },
  {
    name: "Assignation",
    icon: <FaPenSquare />,
    subLinks: [
      {
        name: "New Assignation",
        url: "/newAssign",
      },
      {
        name: "Assignation List",
        url: "/allAssign",
      },
    ],
  },

  {
    name: "Feedback",
    icon: <FaMarker />,
    subLinks: [
      {
        name: "New Feedback",
        url: "/addFeedBack",
      },
      {
        name: "Feedback List",
        url: "/allFeedback",
      },
    ],
  },
  {
    name: "Payment",
    icon: <FaCcAmazonPay />,
    subLinks: [
      {
        name: "All Payment",
        url: "/viewPAyment",
      },
      {
        name: "New Payment",
        url: "/newPayment",
      },
    ],
  },
  {
    name: "Ticketing",
    icon: <FaTicketAlt />,
    url: "/allTicketing",
  },

  {
    name: "Accident & Punish",
    icon: <FaUsers />,
    subLinks: [
      {
        name: "New Accident",
        url: "/newAccident",
      },
      {
        name: "All Accident",
        url: "/allAccident",
      },
      {
        name: "View Punishment",
        url: "/allPunishment",
      },
    ],
  },
];
