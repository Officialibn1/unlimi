import { ColumnDef } from "@tanstack/react-table";

import TableImage from "../../assets/TableImage.png";
import { Checkbox } from "../ui/checkbox";

export type Product = {
	SKU: number;
	Name: string;
	Description: string;
	Brand: string;
	Title: string;
	Gender: string;
	RETAIL: number | null;
	"Cost Price": number;
	Image_1: string;
	URL: string;
	Quantity: number;
	size: string;
	UPC: number | null;
	catalog_time: string;
	supplier: string;
};

export const columns: ColumnDef<Product>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label='Select all'
				className='translate-y-[2px]'
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label='Select row'
				className='translate-y-[2px]'
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "",
		header: "S/N",
		cell: ({ row }) => {
			return <p>{row.index + 1}.</p>;
		},
	},
	{
		accessorKey: "Image_1",
		header: "Image",
		cell: ({ row }) => {
			return (
				<img
					src={TableImage}
					style={{ width: "40px", height: "40px" }}
					// src={row.getValue("Image_1")}
					alt={row.getValue("SKU")}
				/>
			);
		},
	},
	{
		accessorKey: "SKU",
		header: "SKU",
	},
	{
		accessorKey: "Name",
		header: "Name",
	},
	{
		accessorKey: "Title",
		header: "Title",
	},
	{
		accessorKey: "Description",
		header: "Description",
	},
	{
		accessorKey: "Cost Price",
		header: "Cost Price",
		cell: ({ row }) => {
			return <div className='w-24 '>{row.getValue("Cost Price")}</div>;
		},
	},
	{
		accessorKey: "Quantity",
		header: "Quantity",
	},
	{
		accessorKey: "size",
		header: "Size",
		cell: ({ row }) => {
			return <div className='w-20 '>{row.getValue("size")}</div>;
		},
	},
];