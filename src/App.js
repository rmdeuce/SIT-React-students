import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Header from "./components/widGet/Header";
import ImageScroll from "./components/widGet/ImageScroll";

//Обязательно ссылка должна быть на файл формата изображения
const images = ['https://wozap.ru/uploads/posts/2021-07/thumbs/1627696140_bez-imeni-7.jpg',
'https://wozap.ru/uploads/posts/2014-07/140443984799.jpeg',
'https://thailand-good.ru/wp-content/uploads/e/b/c/ebc676df71275ad4300f32a902122776.jpeg'];

function App() {
	return (
		<div className="App">
			<Header />
			<HomePage />
			<ImageScroll images={images}/>
		</div>
		
	);
}

export default App;
