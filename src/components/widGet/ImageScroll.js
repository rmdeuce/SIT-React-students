import React, { useState } from "react";

//Необходимо реализовать компонент для показа набора изображений, 
//который позволяет пользователю перелистывать изображения с 
//помощью кнопок "Назад" и "Вперед".

let ImageScroll = ({images}) => {
	

	const [current_index, setCurrentIndex] = useState(0);
	const goToPrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	  };
	
	  const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	  };


	return (
		<div>
			<button onClick={goToPrevious}> Назад </button>
			<img src={images[current_index]} />
			<button onClick={goToNext}> Вперёд</button>
		</div>
	);
};

export default ImageScroll;
