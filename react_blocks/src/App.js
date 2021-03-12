import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Main from "./Components/Main/Main";
import SubContents from "./Components/SubContents/SubContents";
import Advertisement from "./Components/Advertisement/Advertisement";

function App() {
	return (
		<div className='App'>
			<Header />
			<Navigation />
			<Main>
				<SubContents />
				<SubContents />
				<SubContents />
				<Advertisement />
			</Main>
		</div>
	);
}

export default App;
