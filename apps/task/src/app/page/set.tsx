import {
  Container,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import {
  SidebarBackTo,
  SidebarMenuItem,
  StatusBadge,
  Button,
  List,
  ListItem,
  Toggle,
} from '@galaxy/shifter';
import siteimg from '../img/site-a.png';
import { Header } from '../component/header';
import { Footer } from '../component/footer';
import {
  FaCog,
  FaHome,
  FaCodeBranch,
  FaCode,
  FaUserFriends,
} from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';

export const Set = () => {
  return (
    <>
      <Header></Header>
      <Container className="themed-container mb-7 border-top">
        <div className="row">
          <div className="col-lg-4 border-right pr-0">
            <>
              <SidebarBackTo label="All Sites" to="#" />
            </>
            <h1 className="h3 mt-4">Site Name</h1>
            <StatusBadge
              className="d-inline-block"
              labelPrefix="WordPress"
              status="stopped"
            />
            <div className="shifter-dashboard-columns ">
              <nav className="sidebar-nav">
                <ul>
                  <SidebarMenuItem
                    icon={<FaHome className="d-block" />}
                    submenus={[
                      {
                        label: 'Sub item',
                        to: '#',
                      },
                    ]}
                    to="#"
                  >
                    Home
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    icon={<AiFillThunderbolt className="d-block" />}
                    submenus={[
                      {
                        label: 'Sub item',
                        to: '#',
                      },
                    ]}
                    to="#"
                  >
                    Live
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    active
                    icon={<FaCodeBranch className="d-block" />}
                    shouldShowSubmenus
                    submenus={[
                      {
                        label: 'Sub item',
                        to: '#',
                      },
                    ]}
                    to="#"
                  >
                    Staging
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    icon={<FaCode className="d-block" />}
                    submenus={[
                      {
                        label: 'Sub item',
                        to: '#',
                      },
                    ]}
                    to="#"
                  >
                    Dev
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    deactive
                    icon={<FaCog className="d-block" />}
                    submenus={[
                      {
                        label: 'Sub item',
                        to: '#',
                      },
                    ]}
                    to="#"
                  >
                    Team
                  </SidebarMenuItem>
                  <SidebarMenuItem
                    active
                    icon={<FaUserFriends className="d-block" />}
                    submenus={[
                      {
                        label: 'Sub item',
                        to: '#',
                      },
                    ]}
                    to="#"
                  >
                    Settings
                  </SidebarMenuItem>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-8">
            <h2 className="h3">Site Settings</h2>
            <List rounded>
              <ListItem
                alignItem="center"
                className="px-4 py-3"
                description="when a new deploy is generated, it will be automatically published as the live site."
                justifyContent="between"
                rounded
                status={{
                  fontWeight: 'bold',
                  isActive: true,
                }}
                title="Automatically publish new deploys"
              >
                <Toggle
                  checked
                  id="dummy-toggle"
                  label="dummy"
                  onChange={function noRefCheck() {}}
                />
              </ListItem>
						</List>
						<h2 className="h1">Site Notification Settings</h2>
						<List rounded>
              <ListItem
                alignItem="center"
                className="px-4 py-3"
                description=""
                justifyContent="between"
                rounded
                status={{
                  fontWeight: 'bold',
                  isActive: true,
                }}
                title="Automatically publish new deploys"
              >
                <Toggle
                  checked
                  id="dummy-toggle"
                  label="dummy"
                  onChange={function noRefCheck() {}}
                />
              </ListItem>
						</List>
						<h2 className="h1">Delete site</h2>
						<p>Deleting this site will also delete all site artifacts and data. This cannot be undone. Be sure to back up your site before deleting.</p>
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};
