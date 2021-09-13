import "./App.sass";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
	return (
		<div>
			<Header></Header>
			<TaskList></TaskList>
			<Footer></Footer>
		</div>
	);
}

export default App;
