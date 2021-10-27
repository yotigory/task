import {
  Container,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import {
  SiteCardThumbnail,
  FormSelect,
  ProgressBar,
  StatusBadge,
  Button,
} from '@galaxy/shifter';
import siteimg from '../img/site-a.png';
import { Header } from '../component/header';
import { Footer } from '../component/footer';
import { CreateNewSiteButtons } from '../component/CreateNewSiteButtons';
import { useIsOpenToggle } from '../hooks/useIsOpenToggle';
import { FaSeedling, FaUser } from 'react-icons/fa';

export const List = () => {
	const {isOpen, toggle} = useIsOpenToggle(false)
	const {
		isOpen: isOpen02,
		toggle: toggle02
		} = useIsOpenToggle(false)



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
          <CreateNewSiteButtons></CreateNewSiteButtons>
        </div>

        <div className="shifter-dashboard-main">
          <ProgressBar className="" max={100} min={1} now={20} />
        </div>
        <div className="sitelist row no-gutters justify-content-between shadow-sm mb-4">
          <div className="col-lg-auto d-flex align-items-center">
            <div>
              <SiteCardThumbnail src={siteimg} />
            </div>
            <div>
              <h2 className="sitelist-title h3 font-weight-bold">
                <a href="" className="">
                  site name
                </a>
              </h2>
              <div className="d-flex sitelist-express">
                <p className="mr-4">
                  <a href="">getshifter.io</a>
                </p>
                <p className="sitelist-express">
                  <span className="d-inline-block rounded-circle text-center mr-2">
                    D
                  </span>
                  Team memver name
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="d-flex align-items-center mt-3">
              <div className="mr-4">
                <StatusBadge
                  className="d-inline-block"
                  labelPrefix="WordPress"
                  status="running"
                />
              </div>
              <div className="mr-4">
                <>
                  <Button bordered outline rounded smaller>
                    Manage Site
                  </Button>
                </>
              </div>
              <div className="mr-4 switch-btn">
							<Dropdown isOpen={isOpen} toggle={toggle} size="sm">
                  <DropdownToggle caret color="white" className="btn-switch">
                    ●●●
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="btn-start">
                      <span className="d-block position-relative">
                        Start WordPerss
                      </span>
                    </DropdownItem>
                    <DropdownItem className="btn-restart">
                      <span className="d-block position-relative">
                        Restart WordPerss
                      </span>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>

        <div className="shifter-dashboard-main">
          <ProgressBar className="" max={100} min={1} now={20} />
        </div>
        <div className="sitelist row no-gutters justify-content-between shadow-sm mb-4">
          <div className="col-lg-auto d-flex align-items-center">
            <div>
              <SiteCardThumbnail src={siteimg} />
            </div>
            <div>
              <h2 className="sitelist-title h3 font-weight-bold">
                <a href="" className="">
                  site name
                </a>
                <span className="d-inline-block ml-2 pt-2 pr-2 pb-2 pl-2 rounded">
                  Traial
                </span>
              </h2>
              <div className="d-flex sitelist-express">
                <p className="mr-4">
                  <a href="">getshifter.io</a>
                </p>
                <p className="sitelist-express">
                  <span className="d-inline-block rounded-circle text-center mr-2">
                    D
                  </span>
                  Team memver name
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="d-flex align-items-center mt-3">
              <div className="mr-4">
                <StatusBadge
                  className="d-inline-block"
                  labelPrefix="WordPress"
                  status="running"
                />
              </div>
              <div className="mr-4">
                <>
                  <Button bordered outline rounded smaller>
                    Manage Site
                  </Button>
                </>
              </div>
              <div className="mr-4 switch-btn">
                <Dropdown isOpen={isOpen02} toggle={toggle02} size="sm">
                  <DropdownToggle caret color="white" className="btn-switch">
                    ●●●
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="btn-start">
                      <span className="d-block position-relative">
                        Start WordPerss
                      </span>
                    </DropdownItem>
                    <DropdownItem className="btn-restart">
                      <span className="d-block position-relative">
                        Restart WordPerss
                      </span>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>

        <div className="shifter-dashboard-main">
          <ProgressBar className="" max={100} min={1} now={20} />
        </div>
        <div className="sitelist row no-gutters justify-content-between shadow-sm mb-4">
          <div className="col-lg-auto d-flex align-items-center">
            <div>
              <SiteCardThumbnail src={siteimg} />
            </div>
            <div>
              <h2 className="sitelist-title h3 font-weight-bold">
                <a href="" className="">
                  site name
                </a>
                <span className="d-inline-block ml-2 pt-2 pr-2 pb-2 pl-2 rounded">
                  Traial
                </span>
              </h2>
              <div className="d-flex sitelist-express">
                <p className="mr-4">
                  <a href="">getshifter.io</a>
                </p>
                <p className="sitelist-express">
                  <span className="d-inline-block rounded-circle text-center mr-2">
                    D
                  </span>
                  Team memver name
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="d-flex align-items-center mt-3">
              <div className="mr-4">
                <>
                  <Button bordered outline rounded smaller>
                    Manage Site
                  </Button>
                </>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};
