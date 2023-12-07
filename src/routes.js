/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/AddFoodData.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/OrderSection.js";
import UserPage from "views/User.js";
import SignUp from "components/Login/SignUp";

var routes = [


  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Add Food Data",
    icon: "nc-icon nc-diamond",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/OrderSection",
    name: "Order Section",
    icon: "nc-icon nc-pin-3",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  
  {
    path: "/tables",
    name: "Order Details",
    icon: "nc-icon nc-tile-56",
    component: <TableList />,
    layout: "/admin",
  },
  





];
export default routes;
