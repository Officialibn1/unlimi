import { useState, useEffect } from "react";
import TableImage from "../../assets/TableImage.png";

const ImageCell = ({ value, sku }: { value: string; sku: string }) => {
	const [imgSrc, setImgSrc] = useState(TableImage);

	useEffect(() => {
		const img = new Image();
		img.src = value;

		img.onload = () => setImgSrc(value);
		img.onerror = () => setImgSrc(TableImage);

		return () => {
			img.onload = null;
			img.onerror = null;
		};
	}, [value]);

	return (
		<img
			style={{ width: "40px", height: "40px" }}
			src={imgSrc}
			alt={sku}
		/>
	);
};

export default ImageCell;
