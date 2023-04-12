import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameCounter'

const store = configureStore({
	reducer: {
		counter: gameReducer,
		},
});

export default store;
