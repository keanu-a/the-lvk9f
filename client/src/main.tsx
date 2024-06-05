import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";

import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.tsx";
import EventsPage from "./pages/EventsPage/EventsPage.tsx";
import GalleryPage from "./pages/GalleryPage/GalleryPage.tsx";
import BecomeASupporterPage from "./pages/BecomeASupporterPage/BecomeASupporterPage.tsx";
import DonatePage from "./pages/DonatePage/DonatePage.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "become-a-supporter",
        element: <BecomeASupporterPage />,
      },
      {
        path: "donate",
        element: <DonatePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    <Analytics />
  </React.StrictMode>
);
