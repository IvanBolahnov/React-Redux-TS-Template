import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootPage from "./components/pages/RootPage"
import ErrorPage from "./components/pages/ErrorPage"

import "./App.scss"
import AddPage from "./components/pages/AddPage"

const router = createBrowserRouter([
	{ path: "/", element: <RootPage />, errorElement: <ErrorPage /> },
	{ path: "/add", element: <AddPage /> },
])

function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	)
}

export default App
