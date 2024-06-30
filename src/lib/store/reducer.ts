import { combineReducers } from 'redux';

import { reducer as predictionGamesReducer } from './predictionGames';
import { reducer as userReducer } from './user';

export default combineReducers({
	user: userReducer,
	games: predictionGamesReducer
});
