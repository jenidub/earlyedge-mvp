import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";
import { Container, Col, Row } from "react-bootstrap";
import { UserInfoTypes } from "../AuthLayer/UserInfoTypes";

const ProfilePage: React.FC = () => {
    const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();

    const userInfo: UserInfoTypes = {
        customerName: user?.name,
        username: user?.nickname,
        email: user?.email,
        profilePic: user?.picture,
    }

    if (!isAuthenticated) {
        return <div>Not Authenticated - Please try again</div>
    }

    if(!user) {
        return <div>No User Profile Found - Please check your login info or Register</div>
    }

    getAccessTokenSilently().then(token => console.log('token: ', token))
    console.log(user);

    return (
        <PageLayout>
            <div style={{marginTop: "90px", textAlign: "center"}}>
                <Container>
                    <Row>
                        <h2 style={{textAlign: "center",}}>
                            Profile Page  { userInfo.customerName ? `for ${userInfo.customerName}`: "" }
                        </h2>
                    </Row>
                </Container>
                <Container>
                    <Row style={{display: "flex", marginTop: "30px"}}>
                        {user?.picture && <img src={userInfo.profilePic} alt={`user.name Profile Picture`} style={{width: "200px", margin: "0 auto"}}/>}
                        <div style={{marginTop: "20px"}}>
                            <p>Name: {userInfo.customerName}</p>
                            <p>Username: {userInfo.username}</p>
                            <p>Email: {userInfo.email}</p>
                        </div>
                    </Row>
                </Container>
            </div>
        </PageLayout>
    )
}

export default ProfilePage;
