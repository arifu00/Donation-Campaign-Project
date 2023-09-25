import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import Donation from "./Pages/Donation/Donation";
import Statistics from "./Pages/Statistics/Statistics";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import DonationCardDetail from "./Components/DonationCardDetail/DonationCardDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader: ()=> fetch('/donations.json'),
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      {
        path: '/donations/:id',
        element: <DonationCardDetail></DonationCardDetail>,
        loader: ()=> fetch('/donations.json'),
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
