import parent from './index';

const message_key = (string='') => {

if (
    (typeof string == 'undefined')
    ||
    (typeof string.replace != 'function')
    ||
    (typeof string.toLowerCase != 'function')
){
    return false;
}

string = string.toLowerCase();
string = string.replace(/[^a-z0-9]+/gi, '');

if (
    (!parent.skip_unique)
    &&
    (typeof parent.message_list[ string ] == 'object')
){
    return false;
}

/**
 * generate a unique key for to allow duplicate messages
 */
if (typeof parent.message_list[ string ] == 'object'){
    string = string + Object.keys(parent.message_list).length;
}

return string;

}

export default message_key;