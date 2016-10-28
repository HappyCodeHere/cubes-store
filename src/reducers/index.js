import { combineReducers } from 'redux';

import * as types from '../actions/constants.js';

const rootReducer = combineReducers({
  selectButtonData: selectButton,
});

export default rootReducer;

/*const PHONE_SEND = 'PHONE_SEND';

export function phoneSend(state = {}) {
	switch(action.type):
		case: 
}
*/

function selectButton(state = "Кубики", action) {
	switch(action.type) {
		case types.SELECT_BUTTON:
			return action.payload

		default:
			return state;
	}
}