import React, { createContext, useState, useEffect, ReactNode } from "react";

import { DataContextType, Product } from "typings";

export const DataContext = createContext<DataContextType>({
	data: [],
	loading: true,
	error: null,
});

interface DataProviderProps {
	children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
	const [data, setData] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX",
				);

				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}

				const result = await response.json();

				setData(result);

				setLoading(false);
			} catch (error) {
				if (error instanceof Error) {
					setError(error);
				} else {
					setError(new Error("An unknown error occurred"));
				}

				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<DataContext.Provider value={{ data, loading, error }}>
			{children}
		</DataContext.Provider>
	);
};
