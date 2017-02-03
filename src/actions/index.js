import * as types from './constants.js';
import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDM6RIxwsld_j3OUoPKmNvxMPT6p7D4QOs",
    authDomain: "cubes-5c019.firebaseapp.com",
    databaseURL: "https://cubes-5c019.firebaseio.com",
    storageBucket: "cubes-5c019.appspot.com",
    messagingSenderId: "474806562770"
  };

firebase.initializeApp(config);


export function selectButton(button) {
	return {
		type: types.SELECT_BUTTON,
		payload: button
	}
}


export function phoneSend(phone, text, item) {
 // 	console.log(phone);
 // 	console.log(text);

	let date = new Date();
	let options = {
	  era: 'long',
	  year: 'numeric',
	  month: 'long',
	  day: 'numeric',
	  weekday: 'long',
	  timezone: 'UTC',
	  hour: 'numeric',
	  minute: 'numeric',
	  second: 'numeric'
	};
	let dateSend = date.toLocaleString("ru", options.day);


	firebase.database().ref('cubes').push({
		date: dateSend,
    item,
		phone,
		text
	});
	return {
		type: types.PHONE_SEND,
		payload: phone
	}
}
