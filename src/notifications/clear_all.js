import parent from './index';

const clear_all = (values={}) => {

parent.message_list={};
parent.update();

}

export default clear_all;