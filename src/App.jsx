import "./App.css";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import WatchPage from "./components/watchPage";
import Body from "./components/Body";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Content />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;
