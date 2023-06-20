import { Container } from "react-bootstrap";

import Login from "./Login";

import './styles.css';

const LoginPage = () => {
    return(
        <Container fluid className="container p-0 m-0">
            <Container className="container logo p-0 m-0"></Container>
            
            <Container className="container login p-0 m-0">
                <Login />
            </Container>
        </Container>
    );
}

export default LoginPage;