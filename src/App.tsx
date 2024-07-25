import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";

import { Notifications } from "@mantine/notifications";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routings/Routing";
import store from "./store/store";
function App() {
  return (
    <>
      <MantineProvider>
        <Notifications
          position="top-right"
          pos={"fixed"}
          top={"10px"}
          right={"10px"}
          zIndex={1000}
        />
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </MantineProvider>
    </>
  );
}

export default App;
