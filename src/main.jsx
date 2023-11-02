import Home from "./pages/Home";
import CountryInside from "./pages/CountryInside";
import { loader as countriesLoader } from "./loaders/home.js";
import { loader as countryInsideLoader } from "./loaders/countryInside.js";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: countriesLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/country/name/:countryName",
        element: <CountryInside />,
        loader: countryInsideLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
