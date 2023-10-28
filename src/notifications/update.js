import parent from './index';

const update = (values={}) => {

/**
 * update subscribed store
 * //leftoff could be the cause of issues
 */
if (typeof parent.message_list == 'object'){
	parent.store.set({...parent.message_list});
}

/**
 * stop here if we're displaying messages
 */
if (
	(typeof parent.message_list == 'object')
	&&
	(Object.keys(parent.message_list).length)
){
	return true;
}

/**
 * run then function
 * and next_url
 */
if (typeof parent.then_function == 'function'){
	parent.then_function();
}
if (
	(typeof parent.next_url == 'string')
	&&
	(parent.next_url)
){
	var tmp = parent.next_url + '';
	parent.next_url='';
	window.location = parent.next_url;
}

/**
 * return true/success
 */
return true;

}

export default update;