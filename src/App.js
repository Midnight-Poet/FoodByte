import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Footer, Navbar } from './components/components';
import { Vendors, Dish } from './pages/vendor';
import { Restaurants } from './pages/restaurants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
	let client = new QueryClient()
	return (
		<div className='App'>
			<QueryClientProvider client={client}>
				<Router>
					<Navbar />
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/vendors'
							element={<Restaurants />}
						/>
						<Route
							path='/:linkid'
							element={<Vendors />}
						/>
						<Route
							path='/dishes/:link'
							element={<Dish />}
						/>
					</Routes>
					<Footer />
				</Router>
			</QueryClientProvider>
		</div>
	);
}

export default App;
