

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/customTheme";
import { router } from "./router";// 
import {RouterProvider} from "react-router-dom";
import LoadingComponent from "./components/loading/Loading";

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <LoadingComponent/>
      <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
