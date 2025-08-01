import React from "react";

import MainPage from "./pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout";
import NotFoundPage from "./pages/NotFoundPage";
import SearchBook from "./pages/SearchBookPage";
import BookPage from "./pages/BookPage";
import ErrorPage from "./pages/ErrorPage";
import WhatToReadPage from "./pages/WhatToReadPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "search",
          element: <SearchBook />,
        },
        {
          path: "book",
          element: <BookPage />,
        },
        {
          path: "choose",
          element: <WhatToReadPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
