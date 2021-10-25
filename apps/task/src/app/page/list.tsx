import { useState } from 'react';
import {
  Container,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import {
  SiteCardThumbnail,
  FormSelect,
	ProgressBar,
	WordPressStatusBadge,
} from '@galaxy/shifter';
import siteimg from '../img/site-a.png';
import { Header } from '../component/header';
import { Footer } from '../component/footer';
import { FaSeedling, FaUser } from 'react-icons/fa';

export const List = () => {
	const [dropdownOpen, setOpen] = useState({label01:false,label02:false});
	const toggle = (label: string) => (e: any) => {
		if (dropdownOpen.label01 ===false) {
			setOpen({ ...dropdownOpen, [label]: true });
		} else {
			setOpen({ ...dropdownOpen, [label]: false });
		}
	}

  return (
    <>
      <Header></Header>
      <Container className="themed-container mt-3 mb-7">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h1 className="h2 mr-3">Sites</h1>
            <FormSelect
              errorMessage=""
              value=""
              icon={<FaUser className="d-block" />}
              id="password"
              label=""
              onChange={function noRefCheck() {}}
              options={[
                {
                  children: 'Name:A-Z',
                  value: 'az',
                },
                {
                  children: 'Name:Z-A',
                  value: 'za',
                },
                {
                  children: 'Type:Static',
                  value: 'static',
                },
                {
                  children: 'Type:Headless',
                  value: 'headless',
                },
              ]}
            />
          </div>
          <div>
            <ButtonDropdown isOpen={dropdownOpen.label01} toggle={toggle('label01')}>
              <DropdownToggle caret color="primary">
                + Button Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Shifter Static</DropdownItem>
                <DropdownItem>Shifter Headless</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>

        <div className="shifter-dashboard-main">
          <ProgressBar className="" max={100} min={1} now={20} />
        </div>
        <div className="d-flex justify-content-between shadow-sm">
          <div className="d-flex align-items-center">
            <div>
              <SiteCardThumbnail src={siteimg} />
            </div>
            <div>
              <h2 className="h3">
                site name<span className="">Traial</span>
              </h2>
              <div className="d-flex">
                <p>
                  <a href="">getshifter.io</a>
                </p>
                <p>
                  <span>D</span>Team memver name
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <div>
                <WordPressStatusBadge className="" status="running" />
              </div>
              <div>
                <button type="button" className="btn btn-outline-primary">
                  Manage Site
                </button>
							</div>
							<div>
							<ButtonDropdown isOpen={dropdownOpen.label02} toggle={toggle('label02')}>
              <DropdownToggle caret color="primary">
                + Button Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Shifter Static</DropdownItem>
                <DropdownItem>Shifter Headless</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
							</div>
            </div>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};
