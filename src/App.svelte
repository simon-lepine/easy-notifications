<script>
import { derived, writable } from 'svelte/store';
import new_notifications from './notifications';
export let element;



/**
 * init store so we can loop through it
 * and store element pointer
 */
let store=writable({});
if (
	(typeof window['call_easy_notifications'] != 'undefined')
	&&
	(typeof window['call_easy_notifications'].store != 'undefined')
	&&
	(typeof window['call_easy_notifications'].display == 'function')
){
	store = window['call_easy_notifications'].store;
	window['call_easy_notifications'].element = element;
}

</script>


{#if (
	(typeof window['call_easy_notifications'] != 'undefined')
	&&
	(typeof window['call_easy_notifications'].store != 'undefined')
	&&
	(typeof window['call_easy_notifications'].display == 'function')
)}

{#each Object.entries($store) as [message_id, message_data]}
	<span
		role='alert'
		class={'notifications notification ' + message_id + ' ' + message_data['type']}
		message_id={message_id}
		on:click={window['call_easy_notifications'].on_click_notification}
		on:keyup={window['call_easy_notifications'].on_click_notification}
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

{/if}