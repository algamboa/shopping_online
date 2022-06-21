import { useSelector } from 'react-redux';
import cartShopping from './../images/carrito-de-compras.png';
const Icono = () => {
    const productsQuantity = useSelector(state => state.DetailProductReducer.data.reduce((total, currentValue) => { return total + currentValue.quantity }, 0));
    return (
        <>
            <span style={{position: "relative", top: 0, left: "50%", background: "red", width: "15px", height: "15px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: "white", padding: "2px"}}>{productsQuantity}</span>
            <img alt="Icono carrito de compra" src={cartShopping} width="50px" />
        </>
    )
}

export default Icono;