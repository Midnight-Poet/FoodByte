import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Footer, Navbar } from './components/components';
import { Vendors, Dish } from './pages/vendor';
import { Restaurants } from './pages/restaurants';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/vendor'
						element={<Restaurants />}
					/>
					<Route
						path='/vendor/:linkid'
						element={<Vendors />}
					/>
					<Route
						path='/dish/:link'
						element={<Dish />}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
