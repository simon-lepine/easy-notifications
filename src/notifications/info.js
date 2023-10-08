import parent from './index';

const info = (values={}) => {

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
values['type'] = 'info';

/**
 * display the error message
 */
values = parent.display(values);

/**
 * return message key
 */
return values;

}

export default info;