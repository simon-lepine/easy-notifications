import { derived, writable } from 'svelte/store';

import set_default_then_function from './set_default_then_function';
import display_initial from './display_initial';
import load_initial from './load_initial';
import display from './display';
import message_key from './message_key';
import api_messages from './api_messages';
import error from './error';
import clear_all from './clear_all';
import success from './success';
import clear from './clear';
import info from './info';
import update from './update';
import on_click_notification from './on_click_notification';



class new_notifications {

then_function=()=>{};
element=false;
store=false;
next_url='';
message_list={};
skip_unique=false;
default_timeout=8000;
default_messages = {
    'fatal_error' : 'Something went terribly wrong :(', 
};

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

	this.store = writable({});
	this.next_url='';

	this.message_list={};

	this.skip_unique=false;
	this.default_timeout=8000;

	this.default_messages = {
		'fatal_error' : 'Something went terribly wrong :(', 
	};
}

display_initial=display_initial;
load_initial=load_initial;
display=display;
message_key=message_key;
api_messages=api_messages
error=error;
set_default_then_function=set_default_then_function;
clear_all=clear_all;
success=success;
clear=clear;
info=info;
update=update;
on_click_notification=on_click_notification;

}

/*
 * init window['class'] if not already init'd
 */
var tmp = 'Error instantiating Easy Notifications. ';
if (
	(typeof window['new_call_easy_notifications'] != 'undefined')
	&&
	(typeof window['new_call_easy_notifications'].childNodes == 'object')
){
	console.log(tmp + 'An element of id window[call_easy_notifications] already exists.');
}
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
	console.log(tmp + 'Easy Notifications has already been instantiated.');
}
if (typeof window['new_call_easy_notifications'] == 'undefined'){
	window['new_call_easy_notifications'] = new new_notifications;
}
export default window['new_call_easy_notifications'];