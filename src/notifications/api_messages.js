import parent from './index';

const api_messages = (messages={}) => {

/**
 * confirm we have something
 */
if (
	(typeof messages != 'object')
	||
	(!messages)
){
	parent.update();
	return false;
}

/**
 * add success messages
 */
if (typeof messages['success'] == 'object'){
for (var key in messages['success']){
	parent.success(messages['success'][ key ]);
}
}

/**
 * add info messages
 */
if (typeof messages['info'] == 'object'){
for (var key in messages['info']){
	parent.success(messages['info'][ key ]);
}
}

/**
 * add error messages
 */
if (typeof messages['error'] == 'object'){
for (var key in messages['error']){
	parent.success(messages['error'][ key ]);
}
}

}

export default api_messages;