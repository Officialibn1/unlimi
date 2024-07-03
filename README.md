> # UMLIMI DASHBOARD 🖥️


> ## Built using 
* Reactjs
* Vite
* Typescript
* React Router Dom
* TailwindCSS
* ShadCN Library
* Tanstack/react-table
* Radix UI
* Lucide



> ### Steps to run the project on your local repo
* Clone this repo to your local machine using
  * ```bash
    git clone https://github.com/Officialibn1/unlimi.git
    ``` 
* Or you can optionally Fork the repo and then clone it to your local repo
* Open a terminal in the folder
* Run this command
  * Install all dependencies with
  * ```bash
    npm install
    ```
  * Start local server
  * ```bash
    npm run dev
    ```
  * Build for production using
  * ```bash
      npm run build
    ```

  > There are no environment variables, so everything should work fine with a .env file

> ## You might notice that all product images are the same
This is because of how the img source in been rendered, during development 
I realized the img url provided from the response data, does not render an image in the component 
> ImageCell.tsx

rather it breaks, so for a better user experience, I added a conditional fallback
to render a static image, using this code in the ImageCell.tsx
```typescript
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
```

    

