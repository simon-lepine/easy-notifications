import Notifications from '_root/common/components/notifications.svelte';
import App from './App.svelte';

/**
 * init global object
 *
if (typeof window['easy_notifications'] == 'undefined'){
	window['easy_notifications']={
		'attributes': {}
	};
}

/**
 * get attributes
 */
let app_target='';
if (
	(typeof document.currentScript.attributes == 'object')
	&&
	(typeof document.currentScript.attributes.target == 'object')
	&&
	(typeof document.currentScript.attributes.target.value == 'string')
	&&
	(document.currentScript.attributes.target.value)
	&&
	(app_target = document.querySelectorAll( document.currentScript.attributes.target.value ))
	&&
	(typeof app_target == 'object')
	&&
	(app_target.length > 0)
){
	app_target = app_target[0];
}else{
	app_target='';
}

if (
	(!app_target)
	||
	(typeof app_target.appendChild != 'function')
){
	console.log('A required parameter was not provided.');
	console.log('So Easy Notifications cannot be loaded.');
}else{
	const app = new App({
		target: app_target
	});
}

export default app;