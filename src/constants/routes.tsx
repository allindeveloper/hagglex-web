import React from "react";


const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));

const routes: any = [
  {
    path: "/app/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  }
];

export default routes;
