import parent from './index';

const display_initial = (values={}) => {

if (
    (typeof parent.initial_messages != 'undefined')
    &&
    (parent.initial_messages)
){
for (var key in parent.initial_messages){
    parent.display(parent.initial_messages[ key ]);
}
}

}

export default display_initial;