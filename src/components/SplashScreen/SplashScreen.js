import Logo from "../Logo/Logo";
import { Container } from "./SplashScreen.style";

const SplashScreen = () => {
    return ( 
        <Container>
            <Logo logoWidth={7}/>
            <div className="container__dot">
            <div className="dot first"></div>
            <div className="dot second"></div>
            <div className="dot third"></div>
            </div>
        </Container>
     );
}
 
export default SplashScreen;