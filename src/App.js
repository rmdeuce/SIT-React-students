import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Header from "./components/widGet/Header";
import Footer from "./components/widGet/Footer";


function App() {
	const conorImgUrl= "https://img.gazeta.ru/files3/360/17276360/upload-RIA_5592197-pic_32ratio_900x600-900x600-8633.jpg"
	return (
		<div className="App">
			<Header />
			<HomePage />
			<Footer imageUrl = {conorImgUrl}/> 
		</div>
		
	);
}

export default App;
