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

export interface DataContextType {
	data: Product[];
	loading: boolean;
	error: Error | null;
}
