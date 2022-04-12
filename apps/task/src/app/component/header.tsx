import { Container } from 'reactstrap';
import { SearchForm, Navbar, Nav,NavLinkItem,NavbarDropdown,NavbarDropdownItem } from '@galaxy/shifter';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="mt-2">
      <Container className="themed-container" fluid="lg">
			<Navbar>
      <SearchForm
        onChange={() => undefined}
        onSubmit={(e) => e.preventDefault()}
      />
      <Nav>
			  <NavLinkItem to="/Nav/">Nav</NavLinkItem>
			  <NavLinkItem active to="/Nav/">Nav</NavLinkItem>
        <NavLinkItem to="/Nav/">Nav</NavLinkItem>
        <NavbarDropdown
          avatar={{
            size: 32,
            email: 'test@example.com',
            rounded: true,
          }}
        >
          <NavbarDropdownItem href="#">
            Account
            <FaUser />
          </NavbarDropdownItem>
          <NavbarDropdownItem href="#">
            Log out <FaSignOutAlt />
          </NavbarDropdownItem>
        </NavbarDropdown>
      </Nav>
    </Navbar>
      </Container>
    </header>
  );
};
