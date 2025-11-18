import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import WebTheme from "./utils/webTheme";
import { RouterSection } from "./sections/router/router";

const App = () => {
  return (
    <ThemeProvider theme={WebTheme}>
      <RouterProvider router={RouterSection} />
    </ThemeProvider>
  );
};

export default App;
