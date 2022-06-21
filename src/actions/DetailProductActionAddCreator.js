import { aProduct } from './DetailProductAction';

const DetailProductActionAddCreator = (data) => (dispatch) => {
	dispatch(aProduct(data));
}

export default DetailProductActionAddCreator;