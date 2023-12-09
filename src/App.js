import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/Routes';
import { WithSplashScreen } from './components/SplashScreen';
import DataProvider from './context/DataContext/DataContext';

function App() {
	return (
		<BrowserRouter>
			<DataProvider>
				<AppRoutes />
			</DataProvider>
		</BrowserRouter>
	);
}

export default WithSplashScreen(App);
