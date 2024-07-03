import "./App.css";
import Navbar from "./components/navbar/Navbar";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function Layout() {
	return (
		<main className='wrapper'>
			<Navbar />
			<Outlet />
		</main>
	);
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Dashboard />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
