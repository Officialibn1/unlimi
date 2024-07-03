import ProductsTable from "../components/data-table/ProductsTable";
import { columns } from "@/components/data-table/Columns";
import { DataContext } from "@/context/ContextProvider";
import { useContext } from "react";

const Dashboard = () => {
	const { data, loading, error } = useContext(DataContext);

	console.log(data);

	console.log(error);

	return (
		<div className='p-10 flex flex-col gap-5'>
			<h1 className='text-xl ml-12'>Department List</h1>

			<div className='tableContainer'>
				{loading ? (
					<h1>Loading data. . .</h1>
				) : !loading && error ? (
					<h1>Error eftching data. . .</h1>
				) : (
					<ProductsTable
						data={data}
						columns={columns}
					/>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
