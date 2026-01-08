import { Col, Container } from "react-bootstrap";
import NavBar from '../NavBar/NavBar';
import NavBarButtons from '../NavBar/NavBarButtons';

type PageLayoutProps = {
    children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return(
        <Container>
            <Col>
                <NavBar />
            </Col>
            {/* <h1 style={{border: "3px solid black",}}>The JeniDub Task Management App</h1> */}
            {children}
        </Container>
    )
}

export default PageLayout;
