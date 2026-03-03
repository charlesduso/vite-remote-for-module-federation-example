import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/submodule-remote",
    element: (
      <div>
        Sub-module remote app
        <br />
        <Outlet />
      </div>
    ),
    children: [
      { path: "sub-page", element: <div>Sub-page of the Sub-module remote app</div> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
