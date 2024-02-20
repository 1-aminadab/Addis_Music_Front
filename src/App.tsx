

import { ThemeProvider } from "styled-components";
import { theme } from "./theme/customTheme";
import { router } from "./router";// 
import {RouterProvider} from "react-router-dom";

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
