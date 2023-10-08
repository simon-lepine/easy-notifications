import parent from './index';

const error = (values={}) => {

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
values['type'] = 'error';

/**
 * display the error message
 */
values = parent.display(values);

/**
 * return message key
 */
return values;

}

export default error;