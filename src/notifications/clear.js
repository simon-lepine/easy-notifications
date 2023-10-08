import parent from './index';

const clear = (message_key='') => {

delete (parent.message_list[ message_key ]);
parent.update();

}

export default clear;