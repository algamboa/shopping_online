import { setCart } from './DetailProductAction';

const DetailProductActionSetCartCreator = (data) => (dispatch) => {
	dispatch(setCart(data));
}

export default DetailProductActionSetCartCreator;