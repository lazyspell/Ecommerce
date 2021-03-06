import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
    CartIconContainer,
    ItemCount,
    ShoppingImage,
} from "./cart-icon.styles.jsx";

import "./cart-icon.styles.jsx";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingImage />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
