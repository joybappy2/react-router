import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root";
import "./index.css"


const router = createBrowserRouter( [
  {
    path: "/",
    Component: Root
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
