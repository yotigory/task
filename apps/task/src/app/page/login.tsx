import { Container, Row, Col, Button } from 'reactstrap';
import { FaUser, FaLock } from 'react-icons/fa';
import {
  Layouts,
  ImageLoginInformation,
  FormField,
  AuthFormHeader,
  ImageShifterLogo,
  Checkbox,
} from '@galaxy/shifter';
import { Footer } from '../component/footer';

export const Login = () => {
  return (
    <>
      <Layouts variant="login">
        <Container className="themed-container">
          <Row className="d-flex justify-content-between align-items-center">
            <Col lg="5">
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
                  onChange={function noRefCheck() {}}
                  type="text"
                  value=""
                />
                <FormField
                  errorMessage=""
                  icon={<FaLock className="d-block" />}
                  id="password"
                  label="password"
                  onChange={function noRefCheck() {}}
                  type="password"
                  value=""
                />
                <Checkbox
                  id="remember"
                  label="Remember me"
                  onChange={function noRefCheck() {}}
                />
                <Button
                  className="mt-4 mb-5"
                  block
                  disabled
                  fontWeight="bold"
                  textAlign="center"
                >
                  Log in
                </Button>
                <p>
                  <a href="">Forgot Password?</a>
                </p>
              </div>
            </Col>
            <Col lg="5" className="text-center pt-5 pb-5">
              <ImageLoginInformation
                style={{
                  margin: '0 0 5.4375rem 0',
                }}
                width="153px"
              />
              <h2 className="text-primary font-weight-bold">
                Faster Build Times
              </h2>
              <p className="mt-4 mb-5 h5">
                Customize Shifter settings for up to 70% faster build times.
              </p>
              <p className="font-weight-bold">
                <a className="text-primary" href="">
                  Learn about Shifter Media CDN
                </a>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </Layouts>
    </>
  );
};
