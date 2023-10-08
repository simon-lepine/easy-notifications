import set_default_then_function from './set_default_then_function';

class new_notifications {

then_function={};
element=false;
store=false;

constructor(){
    if (
        (typeof window['new_call_easy_notifications'] != 'undefined')
        &&
        (typeof window['new_call_easy_notifications'].constructor == 'function')
        &&
        (typeof window['new_call_easy_notifications'] == 'object')
        &&
        (typeof window['new_call_easy_notifications'].element != 'object')
        &&
        (typeof window['new_call_easy_notifications'].element.id != 'undefined')
    ){
        return window['new_call_easy_notifications'];
    }
}

set_default_then_function=set_default_then_function;

}

window['new_call_easy_notifications'] = new new_notifications;
export default window['new_call_easy_notifications'];