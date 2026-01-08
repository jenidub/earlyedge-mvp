import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar: React.FC = () => {
    const { logout, isAuthenticated } = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: {returnTo: window.location.origin},
        });
    };

    return (
        <Navbar bg="dark" data-bs-theme="dark" fixed="top" style={{fontSize: "1.25em",}}>
            <Container>
                <Navbar.Brand style={{fontSize: "1.3em", textTransform: "uppercase",}}>
                    <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/6286/6286665.png"
                        width="40"
                        height="40"
                        style={{margin: "0px 20px 0px 0px"}}
                        className="d-inline-block align-top"
                    />
                    JeniDub Task Manager
                </Navbar.Brand>
                <Nav>
                    {isAuthenticated &&
                        <>
                            <Nav.Link href="/dashboard" style={{fontSize: "1.25em",}}>Dashboard</Nav.Link>
                            <Nav.Link href="/profile" style={{fontSize: "1.25em",}}>Profile </Nav.Link>
                            <Nav.Link href="/" style={{fontSize: "1.25em",}} onClick={handleLogout}>Logout </Nav.Link>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;
