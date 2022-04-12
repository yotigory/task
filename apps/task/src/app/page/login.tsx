import { useState,useEffect,useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaUser, FaLock } from 'react-icons/fa';
import {
  Layouts,
  FormField,
  AuthFormHeader,
  ImageShifterLogo,
  Link,
  Button,
} from '@galaxy/shifter';
import { Footer } from '../component/footer';
import '../css/style.css';

export const Login = () => {
	const [status, setStatus] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [canSubmit, setCanSubmit] = useState(false);
	useEffect(() => {
    if (!username || !password) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
	}, [setCanSubmit, username, password]);
	const handleLogin: React.FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      setStatus('inprogress');
      try {
        // await handleSignIn(username, password, dispatchAuthStateChangeEvent);
      } catch (e) {
        // setErrorMessage(e.message);
        setStatus('failure');
      }
    },
		[setStatus]
		// [username, password, setStatus, setErrorMessage]
  );

  return (
    <Layouts variant="login">
      <Container className="themed-container">
        <Row className="d-flex justify-content-between align-items-center">
					<Col lg="5">
					<form autoComplete="on" noValidate onSubmit={handleLogin}>
            <div className="bg-white shadow-sm text-dark bg-white rounded pt-4 pr-4 pb-2 pl-4">
              <AuthFormHeader
                link="/"
                linkText="sign up"
                logo={<ImageShifterLogo height="46" width="36" />}
                title="Log in"
                variant="signup"
              />
              <FormField
                errorMessage=""
                icon={<FaUser className="d-block" />}
                id="email"
                label="Username or email"
                onChange={({ target: { value } }) => setUsername(value)}
                type="text"
                value={username}
              />
              <FormField
                errorMessage=""
                icon={<FaLock className="d-block" />}
                id="password"
                label="password"
                onChange={({ target: { value } }) => setPassword(value)}
                type="password"
                value={password}
              />
              <Button
                type="submit"
                className="mt-4 mb-5 btn-primary"
                block
                fontWeight="bold"
                textAlign="center"
                disabled={!canSubmit}
              >
                {status === 'inprogress' ? 'Loading...' : 'Log In'}
              </Button>
              <div className="forget-password">
                <Link href="/forget_password">{'Forgot Password?'}</Link>
              </div>
						</div>
					</form>
          </Col>
          <Col lg="5" className="text-center pt-5 pb-5"></Col>
        </Row>
      </Container>
      <div className="fixed-bottom">
        <Footer></Footer>
      </div>
    </Layouts>
  );
};
