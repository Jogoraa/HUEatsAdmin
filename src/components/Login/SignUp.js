import React, { useState } from "react";
import { auth, db } from "../../Firebase/FirebaseConfig";
import { Button, Card, CardHeader, CardBody, CardFooter, CardTitle, FormGroup, Form, Input, Row, Col, Alert } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = userCredentials;

    // Basic form validation
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      // Create user account in Firebase Authentication
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);

      // Save user data to Firestore
      const userRef = db.collection("admin").doc(userCredential.user.uid);
      await userRef.set({
        email,
        // Add other user data fields here
      });

      setSuccessMessage("Registration successful!");
    } catch (error) {
      setErrorMessage(`Error signing up: ${error.message}`);
    }
  };

  return (
    <div className="content">
      <Row>
        <Col md="8" className="ml-auto mr-auto">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Sign Up</CardTitle>
            </CardHeader>
            <CardBody>
              {successMessage && <Alert color="success">{successMessage}</Alert>}
              {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
              <Form onSubmit={handleSignUp}>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Email address</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={userCredentials.email}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Password</label>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userCredentials.password}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <FormGroup>
                      <label>Confirm Password</label>
                      <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={userCredentials.confirmPassword}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button className="btn-round" color="primary" type="submit">
                      Sign Up
                    </Button>
                  </div>
                </Row>
              </Form>
              <Row>
                <Col md="12">
                  <p>
                    Already have an account? <Link to="/login">Login here</Link>
                  </p>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <div className="button-container"></div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default SignUp;
