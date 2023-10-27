import './app.css';
import App from './App.svelte';

/**
 * get target attribute
 */
let app_target=false;
if (
	(typeof document.body == 'object')
){
	let new_containter = document.createElement('easy_notifications_element');

	let new_containter_id = document.querySelectorAll('#easy_notifications_element');
    let inc=0;
    while (
        (new_containter_id[0])
        &&
        (inc < 20)
    ){
        inc++;
        new_containter_id = document.querySelectorAll('#easy_notifications_element' + inc);
    }
    if (!inc){
        inc = '';
    }
    new_containter_id = 'easy_notifications_element' + inc;
    new_containter.id = new_containter_id;

	let z_index = document.querySelectorAll('*').length;
	new_containter.style.zIndex = 'z-index:' + z_index;
    new_containter.classList = 'easy_notifications_super_long_and_unique_class parent';

    document.body.appendChild(new_containter);

	app_target = new_containter;

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
		target: app_target, 
        props : {
            element : app_target, 
        }
	});
}

/**
 * export
 */
export default app;