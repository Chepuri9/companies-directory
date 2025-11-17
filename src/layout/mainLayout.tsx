import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../sections/footer/footer";
import ResponsiveHeader from "../sections/header/header";

export const MainLayout = () => {
  return (
    <div>
      <ResponsiveHeader />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};
