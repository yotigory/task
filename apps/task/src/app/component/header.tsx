import { Container, } from 'reactstrap';
import { Nav, NavLinkItem } from '@galaxy/shifter';

export const Header = () => {
  return (
    <header className="border-bottom mt-2">
      <Container className="themed-container" fluid="lg">
        <nav className="navbar navbar-expand-lg">
          <Nav>
            <NavLinkItem to="/">ログインページ</NavLinkItem>
            <NavLinkItem to="/">ガイドページ</NavLinkItem>
            <NavLinkItem to="/">サイト一覧</NavLinkItem>
            <NavLinkItem to="/">サイト設定画面</NavLinkItem>
          </Nav>
        </nav>
      </Container>
    </header>
  );
};
