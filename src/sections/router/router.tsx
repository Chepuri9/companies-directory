import { Box, CircularProgress } from "@mui/material";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pageNotFound/pageNotFound";
import Home from "../home/home";
import { ScrollTop } from "../../utils/scroolTop";
import { MainLayout } from "../../layout/mainLayout";
import CompaniesPage from "../companies/companies";

export const RouterSection = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollTop>
        <MainLayout />
      </ScrollTop>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "80vh",
                }}
              >
                <CircularProgress />
              </Box>
            }
          >
            <Home />
          </Suspense>
        ),
      },

      { path: "/companies", element: <CompaniesPage /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);
