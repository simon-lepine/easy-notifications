import parent from './index';

const success = (values={}) => {

/**
 * ensure we have a message to display
 */
if (typeof values == 'string'){
	values = {
		'message' : values
	}
}

/**
 * set message type
 */
values['type'] = 'success';

/**
 * display the error message
 */
values = parent.display(values);

/**
 * return message key
 */
return values;


}

export default success;