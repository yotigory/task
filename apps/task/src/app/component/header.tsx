import { Container } from 'reactstrap';
import { SearchForm, Navbar, NavbarBrand,Nav,NavLinkItem,NavbarDropdown,NavbarDropdownItem } from '@galaxy/shifter';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="mt-2">
      <Container className="themed-container" fluid="lg">
			<Navbar>
      <NavbarBrand href="/" name="shifter" />
      <SearchForm
        onChange={() => undefined}
        onSubmit={(e) => e.preventDefault()}
      />
      <Nav>
        <NavLinkItem active to="#">
          Sites
        </NavLinkItem>
        <NavLinkItem to="#">Teams</NavLinkItem>
        <NavLinkItem to="#">Guides</NavLinkItem>
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
