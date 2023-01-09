<script lang='ts'>

import { derived, writable } from 'svelte/store';

/**
 * //class for handling notifications
 */
class notifications{

/**
 * //function to construct
 */
constructor(){
	this.initial_messages=''; 

	this.attributes={};
	this.load_attributes();

	this.set_default_then_function();

	this.store = writable({});
	this.next_url='';

	this.message_list={};

	this.skip_unique=0;
	this.default_timeout=8000;

	this.default_messages = {
		'fatal_error' : 'Something went terribly wrong :(', 
	};

	this.load_initial();
}

/**
 * //function to set/reset then function
 */
set_default_then_function(){
	this.then_function = () => {
		return true;
	}
}

/**
 * //function to load script attributes
 */
load_attributes(){

if (typeof this.attributes != 'object'){
	this.attributes={};
}

if (
	(typeof document.currentScript == 'object')
	&&
	(typeof document.currentScript.attributes == 'object')
){
for (var key in document.currentScript.attributes){
	if (
		(typeof document.currentScript.attributes[ key ].name == 'undefined')
		||
		(typeof document.currentScript.attributes[ key ].value == 'undefined')
	){
		continue;
	}

	this.attributes[ document.currentScript.attributes[ key ].name ] = document.currentScript.attributes[ key ].value;

	if (
		(document.currentScript.attributes[ key ].name !== 'store')
		&&
		(typeof this[ document.currentScript.attributes[ key ].name ] != 'function')
		&&
		(typeof this[ document.currentScript.attributes[ key ].name ] != 'undefined')
	){
		this[ document.currentScript.attributes[ key ].name ] = document.currentScript.attributes[ key ].value;
	}

/**
 * done for loop
 */
}
}


/**
 * done //function
 */
}

/**
 * //function to load initial messages (from server)
 * //usage set initial_delay to a number 
 */
load_initial(){

/**
 * get pointer to this so it can be used in the resulting function
 */
let easy_notifications = this;

/**
 * ensure we have an object to load
 */
if (typeof this.initial_messages == 'undefined'){
	this.initial_messages=[];
}

/**
 * confirm we have an initial delay
 //note must be set to at least 1 second in order to run
 */
if (
	(typeof this.attributes['initial_delay'] != 'undefined')
	&&
	(typeof this.attributes['initial_delay'].toString == 'function')
	&&
	(this.attributes['initial_delay'] * 1)
){
	this.attributes['initial_delay'] = this.attributes['initial_delay'] * 1;
}else{
	return false;
}
if (
	(this.attributes['initial_delay'] < 1000)
	&&
	(this.attributes['initial_delay'] > 1)
){
	this.attributes['initial_delay'] = this.attributes['initial_delay'] * 1000;
}

/**
 * set timeout for initial delay
 */
setTimeout(
	function(){
		easy_notifications.display_initial();
	}, 
	this.attributes['initial_delay']
);

/**
 * done //function
 */
}

/**
 * //function to display initial messages
 * //usage window['easy_notifications'].display_initial() - to force display of initial messages (window['easy_notifications']['initial_messages'])
 */
display_initial(){

if (
	(typeof this.initial_messages != 'undefined')
	&&
	(this.initial_messages)
){
	for (var key in this.initial_messages){
		this.display(this.initial_messages[ key ]);
	}
}

/**
 * done //function
 */
}

/**
 * //function to update display of messages
 */
update(){

/**
 * update subscribed store
 */
if (typeof window['easy_notifications'].message_list == 'object'){
	window['easy_notifications'].store.set({...window['easy_notifications'].message_list});
}

/**
 * stop here if we're displaying messages
 */
if (
	(typeof window['easy_notifications'].message_list == 'object')
	&&
	(Object.keys(window['easy_notifications'].message_list).length)
){
	return true;
}

/**
 * run then function
 * and next_url
 */
if (typeof this.then_function == 'function'){
	this.then_function();
}
if (
	(typeof this.next_url == 'string')
	&&
	(this.next_url)
){
	window.location = this.next_url;
}

/**
 * return true/success
 */
return true;

/**
 * done //function
 */
}


/**
 * //function to a message
 */
clear(message_key=''){
	delete (this.message_list[ message_key ]);
	this.update();

/**
 * done //function
 */
}


/**
 * //function to a message
 */
clear_all(){
	this.message_list={};
	this.update();

/**
 * done //function
 */
}


message_key(string=''){

string = string.replace(/[^a-zA-Z0-9]+/gi, '');
string = string.toLowerCase();

if (
	(!this.skip_unique)
	&&
	(typeof this.message_list[ string ] == 'object')
){
	return false;
}

/**
 * generate a unique key for to allow duplicate messages
 */
if (typeof this.message_list[ string ] == 'object'){
	string = string + Object.keys(this.message_list).length;
}

return string;

/**
 * done //function
 */
}

/**
 * //function to handle API result 
 */
api_messages(messages={}){

/**
 * confirm we have something
 */
if (
	(typeof messages != 'object')
	||
	(!messages)
){
	this.update();
	return false;
}

/**
 * add success messages
 */
if (typeof messages['success'] == 'object'){
for (var key in messages['success']){
	this.success(messages['success'][ key ]);
}
}

/**
 * add info messages
 */
if (typeof messages['info'] == 'object'){
for (var key in messages['info']){
	this.success(messages['info'][ key ]);
}
}

/**
 * add error messages
 */
if (typeof messages['error'] == 'object'){
for (var key in messages['error']){
	this.success(messages['error'][ key ]);
}
}

/**
 * done //function
 */
}

/**
 * //function to display a message
 */
display(values={}){

/**
 * get a message key or return false if already exists
 */
values['message_key'] = this.message_key(values['message']);
if (!values['message_key']){
	return false;
}

/**
 * set/get timeout
 */
if (
	(typeof values['timeout'] == 'undefined')
	||
	(typeof values['timeout'].toString != 'function')
){
	values['timeout'] = this.default_timeout;
}
values['timeout'] = values['timeout'] * 1;
if (//note allow setting in raw seconds (8 seconds = 8000)
	(values['timeout'] < 1000)
	&&
	(values['timeout'] > 1)
){
	values['timeout'] = values['timeout'] * 1000;
}

/**
 * add to message list
 */
if (typeof this.message_list != 'object'){
	this.message_list={};	
}
this.message_list[ values['message_key'] ] = values;

/**
 * set timeout to display message
 */
if (values['timeout']){
this.message_list[ values['message_key'] ].timeout = setTimeout(
	function(){
		window['easy_notifications'].clear(values['message_key'])
	}, 
	values['timeout']
);
}

/**
 * exec update
 */
this.update();

return values;

/**
 * done //function
 */
}


/**
 * //function to show success messages
 */
success(values={}){

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
values = this.display(values);

/**
 * return message key
 */
return values;

/**
 * done //function
 */
}


/**
 * //function to show info messages
 */
info(values={}){

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
values = this.display(values);

/**
 * return message key
 */
return values;

/**
 * done //function
 */
}

/**
 * //function to show error messages
 */
error(values={}){

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
values = this.display(values);

/**
 * return message key
 */
return values;

/**
 * done //function
 */
}

/**
 * done //class
 */
}

/*
 * init window['class'] if not already init'd
 */
if (
	(typeof window['easy_notifications'] == 'undefined')
	||
	(typeof window['easy_notifications'].constructor != 'function')
){
	window['easy_notifications'] = new notifications;
}

/**
 * //function to handle notification onclick
 */
function handle_onclick(element={}){
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
		(typeof window['easy_notifications'].message_list != 'object')
		||
		(typeof window['easy_notifications'].message_list[ element['target']['attributes']['message_id'].value ] != 'object')
	){
		return false;
	}

	delete window['easy_notifications'].message_list[ element['target']['attributes']['message_id'].value ];
	window['easy_notifications'].update();

/**
 * done //function
 */
}

/**
 * init store so we can loop through it
 */
let store=writable({});
if (
	(typeof window['easy_notifications'] != 'undefined')
	&&
	(typeof window['easy_notifications'].store != 'undefined')
){
	store = window['easy_notifications'].store;
}

</script>


{#each Object.entries($store) as [message_id, message_data]}
	<span
		class={'notifications notification ' + message_id + ' ' + message_data['type']}
		message_id={message_id}
		on:click={handle_onclick}
	>
		{#if (
			(typeof message_data['type'] == 'string')
			&&
			(message_data['type'])
		)}
			<b>{message_data['type'].toUpperCase()} : </b>
			<br />
		{/if}
		
		{message_data['message']}
	</span>
{/each}
	