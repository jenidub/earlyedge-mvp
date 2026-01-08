import { Container, Row, Col  } from "react-bootstrap";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const LoginPage: React.FC = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center" 
            style={{ minHeight: '100vh', width: '100vw', backgroundColor: "#35d7f6"}}
        >
            <Container>
                <Row>
                    <h1 style={{border: "3px solid black", textAlign: "center", color: "white", margin: "20px 0px", padding: "50px",}}>The JeniDub Task Management App</h1>
                    <LoginButton />
                    <LogoutButton />
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage;
