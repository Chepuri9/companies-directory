import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import WebTheme from "./utils/webTheme";
import { RouterSection } from "./sections/router/router";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={WebTheme}>
        <RouterProvider router={RouterSection} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
