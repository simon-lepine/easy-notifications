import parent from './index';

const load_initial = (values={}) => {

/**
 * ensure we have an object to load
 */
if (typeof parent.initial_messages == 'undefined'){
	parent.initial_messages=[];
}

/**
 * confirm we have an initial delay
 //note must be set to at least 1 second in order to run
 */
if (
	(typeof parent.attributes['initial_delay'] != 'undefined')
	&&
	(typeof parent.attributes['initial_delay'].toString == 'function')
	&&
	(parent.attributes['initial_delay'] * 1)
){
	parent.attributes['initial_delay'] = parent.attributes['initial_delay'] * 1;
}else{
	return false;
}
if (
	(parent.attributes['initial_delay'] < 1000)
	&&
	(parent.attributes['initial_delay'] > 1)
){
	parent.attributes['initial_delay'] = parent.attributes['initial_delay'] * 1000;
}

/**
 * set timeout for initial delay
 */
setTimeout(
	function(){
		parent.display_initial();
	}, 
	parent.attributes['initial_delay']
);


}

export default load_initial;