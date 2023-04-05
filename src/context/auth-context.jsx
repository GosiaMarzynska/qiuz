import React, { useState } from 'react';

export const AuthContext = React.createContext({
	isAuth: false,
	name: '',
	login: () => {},
});

const AuthContextProvider = props => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userName, setUserName] = useState('');

	const loginHandler = nameInput => {
		setIsAuthenticated(prev => !prev);
		setUserName(nameInput);
	};

	return (
		<AuthContext.Provider value={{ isAuth: isAuthenticated, name: userName, login: loginHandler }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
