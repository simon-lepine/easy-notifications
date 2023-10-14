import parent from './index';

const display_api_messages = (values={}) => {

if (typeof parent.api_messages != 'object'){
    return false;
}
if (
    (typeof parent['api_messages']['error'] != 'object')
    &&
    (typeof parent['api_messages']['info'] != 'object')
    &&
    (typeof parent['api_messages']['success'] != 'object')
){
    return false;
}

/**
 * display success
 */
if (
    (typeof parent['api_messages']['success'] == 'object')
    &&
    (Object.keys(parent['api_messages']['success']).length)
){
for (var key in parent['api_messages']['success']){
    if (typeof parent['api_messages']['success'][ key ] == 'string'){
        parent.success(parent['api_messages']['success'][ key ]);
    }
    delete parent['api_messages']['success'][ key ];
}
}

/**
 * display info
 */
if (
    (typeof parent['api_messages']['info'] == 'object')
    &&
    (Object.keys(parent['api_messages']['info']).length)
){
for (var key in parent['api_messages']['info']){
    if (typeof parent['api_messages']['info'][ key ] == 'string'){
        parent.info(parent['api_messages']['info'][ key ]);
    }
    delete parent['api_messages']['info'][ key ];
}
}

/**
 * display errors
 */
if (
    (typeof parent['api_messages']['error'] == 'object')
    &&
    (Object.keys(parent['api_messages']['error']).length)
){
for (var key in parent['api_messages']['error']){
    if (typeof parent['api_messages']['error'][ key ] == 'string'){
        parent.error(parent['api_messages']['error'][ key ]);
    }
    delete parent['api_messages']['error'][ key ];
}
}



}

export default display_api_messages;