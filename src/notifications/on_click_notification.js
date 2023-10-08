import parent from './index';

const on_click_notification = (element={}) => {
	if (
		(typeof element != 'object')
		||
		(typeof element['target'] == 'undefined')
		||
		(typeof element['target']['attributes'] == 'undefined')
		||
		(typeof element['target']['attributes']['message_id'] == 'undefined')
		||
		(!element['target']['attributes']['message_id'])
	){
		return false;
	}

	if (
		(typeof parent.message_list != 'object')
		||
		(typeof parent.message_list[ element['target']['attributes']['message_id'].value ] != 'object')
	){
		return false;
	}

	delete parent.message_list[ element['target']['attributes']['message_id'].value ];
	parent.update();

/**
 * done //function
 */
}

export default on_click_notification;