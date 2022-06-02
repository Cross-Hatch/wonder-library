import { Badge, CartImg, Container } from "./CartIcon.style";
import cartImage from '../../assets/cart-icon.svg'

const CartIcon = ({cartImgWidth}) => {
    return ( 
        <Container>
            <CartImg cartImgWidth={cartImgWidth} src={cartImage} alt="Cart Icon" />
            <Badge>50</Badge>
        </Container>
     );
}
 
export default CartIcon;