import { Container, DownloadButton, DownloadWrapper } from "./Payment.style";

const Payment = () => {
    return ( 
        <Container>
            <h1>Download</h1>
            <DownloadWrapper>
                <DownloadButton to="/download">Download</DownloadButton>
            </DownloadWrapper>
        </Container>        
     );
}
 
export default Payment;