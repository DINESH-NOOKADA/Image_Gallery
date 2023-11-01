import React,{useEffect, useState} from 'react'
import Layout from './Layout';

const GetImage = ({getZindex,theme,data,getData}) => {
    const [images, setImages] = useState([]);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		// Replace 'YOUR_UNSPLASH_API_KEY' with your actual Unsplash API key
		// console.log("1");
		var apiUrl = `https://api.unsplash.com/search/photos?page=1&query=wallpaper&client_id=jtG64_Wh4TykbyqsWUlI2cdmYY6lGS4FF0ceF5XkiPg#`;
		if(data){
		  apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${data}&client_id=jtG64_Wh4TykbyqsWUlI2cdmYY6lGS4FF0ceF5XkiPg#`;
		}
		  fetch(apiUrl)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((jsonData) => {
				setImages(jsonData.results);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setLoading(false);
			});
	},[data]);
	return (
		<>
			{/* <h1>Unsplash Image Gallery</h1> */}
			{isLoading ? (
				<p>Loading images...</p>
			) : (
			<Layout getZindex={getZindex} theme={theme} getData = {getData} images={images}/>
			)}
		</>
	);
}

export default GetImage