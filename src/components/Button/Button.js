import { Container } from "./Button.style";

const Button = ({btnName}) => {
    return ( 
        <Container to="/store">
            {btnName}
        </Container>
     );
}
 
export default Button;