import parent from './index';
const set_default_then_function = () => {
    parent.then_function = () => {
		return true;
	}
}
export default set_default_then_function;