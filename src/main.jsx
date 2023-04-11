import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AuthContextProvider from './context/auth-context';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</Provider>
	</React.StrictMode>
);
