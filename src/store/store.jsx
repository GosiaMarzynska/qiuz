import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameCounter'

const store = configureStore({
	reducer: {
		game: gameReducer,
	},
});

export default store;
