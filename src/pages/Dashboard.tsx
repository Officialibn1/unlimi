import { products } from "@/lib/dummy-data";
import ProductsTable from "../components/data-table/ProductsTable";
import { columns } from "@/components/data-table/Columns";

const Dashboard = () => {
	return (
		<div className='p-10 flex flex-col gap-5'>
			<h1 className='text-xl ml-12'>Department List</h1>

			<div className='tableContainer'>
				<ProductsTable
					data={products}
					columns={columns}
				/>
			</div>
		</div>
	);
};

export default Dashboard;
