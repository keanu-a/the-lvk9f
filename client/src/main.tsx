import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.tsx";
import EventsPage from "./pages/EventsPage/EventsPage.tsx";
import GalleryPage from "./pages/GalleryPage/GalleryPage.tsx";
import MembershipPage from "./pages/MembershipPage/MembershipPage.tsx";
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
        element: <MembershipPage />,
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
  </React.StrictMode>
);
