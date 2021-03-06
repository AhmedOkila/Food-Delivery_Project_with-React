import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCTX = useContext(CartContext)
    const numberOfCartItems = cartCTX.items.reduce((Accumulator, item) => {
        return Accumulator + item.amount;
    }, 0);
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;