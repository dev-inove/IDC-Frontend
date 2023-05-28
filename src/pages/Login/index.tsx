import { useState } from "react";

import { Button, Container, Form, InputGroup, Nav } from "react-bootstrap";
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

import { validateEmail, validatePassword } from '../../validations/loginValidation';

import './styles.css';

const Login = () => {
  const navigate = useNavigate();

    const [email, setEmail] = useState({
        value: "",
        error: "",
      });
    
      const [password, setPassword] = useState({
        value: "",
        error: "",
        type: false,
      });
    
      const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail({ value, error: validateEmail(value) ? "" : "E-mail inválido." });
      };
    
      const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword({ ...password, value, error: validatePassword(value) ? "" : "Senha incorreta. Tente novamente ou redefina sua senha." });
      };
    
      const handlePasswordType = () => {
        setPassword({ ...password, type: !password.type });
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if(!validateEmail(email.value)) {
          setEmail({ ...email, error: "E-mail inválido." });
        }
    
        if(!validatePassword(password.value)) {
            setPassword({ ...password, error:
                "Senha incorreta. Tente novamente ou redefina sua senha."
            });
          }

          if(validateEmail(email.value) && validatePassword(password.value)) {
            navigate('/home');
          }
      };

    return(
        <Container fluid className="container p-0 m-0">
            <Container className="container logo p-0 m-0"></Container>
            
            <Container className="container login p-0 m-0">
              <Form
                style={{ padding: "0 20% 0 20%", width: "100%" }}
                onSubmit={handleSubmit}
              >
              <h2 style={{ marginBottom: "35px" }}>Login</h2>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  value={email.value}
                  onChange={handleEmail}
                  isInvalid={!!email.error}
                />
                <Form.Control.Feedback type="invalid">
                  {email.error}
                </Form.Control.Feedback>
              </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <InputGroup>
          <Form.Control
            style={{ borderRight: "none" }}
            type={password.type ? "text" : "password"}
            value={password.value}
            onChange={handlePassword}
            isInvalid={!!password.error}
          />
          <InputGroup.Text
            style={{
              background: "none",
              borderRadius: "0 5px 5px 0",
              borderColor: password.error ? "red" : ""
            }}>
            {password.type ? (
              <EyeSlash
                style={{ cursor: "pointer" }}
                size={18}
                onClick={handlePasswordType}
              />
            ) : (
              <Eye
                style={{ cursor: "pointer" }}
                size={18}
                onClick={handlePasswordType}
              />
            )}
          </InputGroup.Text>
          <Form.Control.Feedback type="invalid">
            {password.error}
        </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          style={{ userSelect: "none" }}
          type="checkbox"
          label="Lembrar de mim"
        />
      </Form.Group>

        <Button
          style={{ fontWeight: "bold", height: "50px", width: "100%" }}
          variant="success"
          type="submit"
        >
          Entrar no sistema
        </Button>

      <Nav style={{ justifyContent: "center", marginTop: "35px" }}>
        <LinkContainer to="/resetPassword">
          <Nav.Link className="link">Esqueceu sua senha?</Nav.Link>
        </LinkContainer>
      </Nav>
    </Form>
            </Container>
        </Container>
    );
}

export default Login;