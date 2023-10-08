import App from './App.svelte';
console.log('TEST');
/**
 * get target attribute
 */
let app_target={};
if (
	(typeof document.currentScript.attributes == 'object')
){

	let new_containter = document.createElement('easy_notifications');

	new_containter.id = document.querySelectorAll('#easy_notifications');
	new_containter.id = 'easy_notifications_' + new_containter.id.length;

	new_containter.classList ='easy_notifications';

	let z_index = document.querySelectorAll('*').length;
	new_containter.style = `z-index:${z_index};`;

	document.currentScript.after(new_containter);

	app_target = new_containter;

	console.log(app_target);//debug
}else{
	app_target='';
}

/**
 * attach app to target
 */
let app = {};
if (
	(!app_target)
	||
	(typeof app_target.appendChild != 'function')
){
	console.log('A required parameter was not provided.');
	console.log('So Easy Notifications cannot be loaded.');
}else{
	app = new App({
		target: app_target
	});
}

/**
 * export
 */
export default app;

/**
 * 
 * 

import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('App'),
})

export default app