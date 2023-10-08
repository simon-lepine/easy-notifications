import parent from './index';

const display = (values={}) => {



/**
 * get a message key or return false if already exists
 */
values['message_key'] = parent.message_key(values['message']);
if (!values['message_key']){
	return false;
}

/**
 * set/get timeout
 */
if (
	(typeof values['timeout'] == 'undefined')
	||
	(typeof values['timeout'].toString != 'function')
){
	values['timeout'] = parent.default_timeout;
}
values['timeout'] = values['timeout'] * 1;
if (//note allow setting in raw seconds (8 seconds = 8000)
	(values['timeout'] < 1000)
	&&
	(values['timeout'] > 1)
){
	values['timeout'] = values['timeout'] * 1000;
}

/**
 * add to message list
 */
if (typeof parent.message_list != 'object'){
	parent.message_list={};	
}
parent.message_list[ values['message_key'] ] = values;

/**
 * set timeout to display message
 */
if (values['timeout']){
    parent.message_list[ values['message_key'] ].timeout = setTimeout(
	function(){
		parent.clear(values['message_key'])
	}, 
	values['timeout']
);
}

/**
 * exec update
 */
parent.update();

return values;

}

export default display;