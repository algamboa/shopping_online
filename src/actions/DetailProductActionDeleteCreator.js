import { emptyCart } from './DetailProductAction';

const DetailProductActionDeleteCreator = () => (dispatch) => {
	dispatch(emptyCart());
}

export default DetailProductActionDeleteCreator;