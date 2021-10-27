import { Container } from 'reactstrap';
import {
  SidebarBackTo,
  SidebarMenuItem,
  StatusBadge,
  List,
  ListItem,
  Toggle,
  Button,
} from '@galaxy/shifter';
import { Header } from '../component/header';
import { Footer } from '../component/footer';
import { useIsOpenToggle } from '../hooks/useIsOpenToggle';
import {
  FaCog,
  FaHome,
  FaCodeBranch,
  FaCode,
  FaUserFriends,
} from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';

export const Set = () => {
  const { isOpen, toggle } = useIsOpenToggle(true);
  const { isOpen: isOpen02, toggle: toggle02 } = useIsOpenToggle(true);
  const { isOpen: isOpen03, toggle: toggle03 } = useIsOpenToggle(false);
  const { isOpen: isOpen04, toggle: toggle04 } = useIsOpenToggle(true);
  const { isOpen: isOpen05, toggle: toggle05 } = useIsOpenToggle(true);
  const { isOpen: isOpen06, toggle: toggle06 } = useIsOpenToggle(true);
  const { isOpen: isOpen07, toggle: toggle07 } = useIsOpenToggle(true);
  const { isOpen: isOpen08, toggle: toggle08 } = useIsOpenToggle(true);

  return (
    <>
      <Header></Header>
      <Container className="themed-container mb-7 border-top">
        <div className="row">
          <div className="col-lg-9 order-lg-last pt-3">
            <h2 className="h3 mb-3">Site Settings</h2>
            <List rounded className="mb-3">
              <ListItem
                alignItem="center"
                className="px-4 py-3"
                description="when a new deploy is generated, it will be automatically published as the live site."
                justifyContent="between"
                rounded
                status={{
                  fontWeight: 'bold',
                  isActive: isOpen,
                }}
                title="Automatically publish new deploys"
              >
                <Toggle
                  checked={isOpen}
                  id="toggle01"
                  label="dummy"
                  onChange={toggle}
                />
              </ListItem>
            </List>

            <List rounded className="mb-3">
              <ListItem
                alignItem="center"
                className="px-4 py-3"
                description="when a new deploy is generated, a downloadable WordPress backup will also be created."
                justifyContent="between"
                rounded
                status={{
                  fontWeight: 'bold',
                  isActive: isOpen02,
                }}
                title="Create a WordPress backup when a new deploy is built"
              >
                <Toggle
                  checked={isOpen02}
                  id="toggle02"
                  label="dummy"
                  onChange={toggle02}
                />
              </ListItem>
            </List>

            <List rounded className="mb-3">
              <ListItem
                alignItem="center"
                className="px-4 py-3"
                description="when a new deploy is generated, a downloadable WordPress backup will also be created."
                justifyContent="between"
                rounded
                status={{
                  fontWeight: 'bold',
                  isActive: isOpen03,
                }}
                title="Prevent this site from being deleted"
              >
                <Toggle
                  checked={isOpen03}
                  id="toggle03"
                  label="dummy"
                  onChange={toggle03}
                />
              </ListItem>
            </List>

            <h2 className="h1 mt-5">Site Notification Settings</h2>
            <List rounded className="no-side-border mb-3 pt-2 pb-2">
              <ListItem
                alignItem="center"
                className="px-4 py-3"
                description=""
                justifyContent="between"
                rounded
                status={{
                  fontWeight: 'bold',
                  isActive: isOpen04,
                }}
                title="Recieve notifications for this site"
              >
                <Toggle
                  checked={isOpen04}
                  id="toggle04"
                  label="dummy"
                  onChange={toggle04}
                />
              </ListItem>
            </List>

            <List rounded className="no-side-border">
              <ListItem
                alignItem="center"
                className="px-4 py-3"
                description=""
                justifyContent="between"
                rounded
                status={{
                  fontWeight: 'bold',
                  isActive: isOpen05,
                }}
                title="Notify me when a new artifact it created "
              >
                <Toggle
                  checked={isOpen05}
                  id="toggle05"
                  label="dummy"
                  onChange={toggle05}
                />
              </ListItem>
            </List>
            <List rounded className="no-side-border no-top-border">
              <ListItem
                alignItem="center"
                className="px-4 py-3"
                description=""
                justifyContent="between"
                rounded
                status={{
                  fontWeight: 'bold',
                  isActive: isOpen06,
                }}
                title="Notifiy me when a site is published"
              >
                <Toggle
                  checked={isOpen06}
                  id="toggle06"
                  label="dummy"
                  onChange={toggle06}
                />
              </ListItem>
            </List>
            <List rounded className="no-side-border no-top-border">
              <ListItem
                alignItem="center"
                className="px-4 py-3"
                description=""
                justifyContent="between"
                rounded
                status={{
                  fontWeight: 'bold',
                  isActive: isOpen07,
                }}
                title="Notifiy me when a site is published"
              >
                <Toggle
                  checked={isOpen07}
                  id="toggle07"
                  label="dummy"
                  onChange={toggle07}
                />
              </ListItem>
            </List>
            <List rounded className="no-side-border no-top-border">
              <ListItem
                alignItem="center"
                className="px-4 py-3"
                description=""
                justifyContent="between"
                rounded
                status={{
                  fontWeight: 'bold',
                  isActive: isOpen08,
                }}
                title="Notify me about domain changes"
              >
                <Toggle
                  checked={isOpen08}
                  id="toggle08"
                  label="dummy"
                  onChange={toggle08}
                />
              </ListItem>
            </List>

            <h2 className="h1 mt-5">Delete site</h2>
            <p>
              Deleting this site will also delete all site artifacts and data.
              This cannot be undone. Be sure to back up your site before
              deleting.
            </p>
            <div className="text-right">
              <Button outline smaller className="btn-outline-secondary">
                Delete Site
              </Button>
            </div>
          </div>
          <div className="col-lg-3 order-lg-first sideber">
            <div className="pl-5 pt-3">
              <SidebarBackTo label="All Sites" to="#" />
              <h1 className="h3 mt-4">Site Name</h1>
              <StatusBadge
                className="d-inline-block"
                labelPrefix="WordPress"
                status="stopped"
              />
              <div className="shifter-dashboard-columns pt-4">
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
                      icon={<FaUserFriends className="d-block" />}
                      submenus={[
                        {
                          label: 'Sub',
                          to: '#',
                        },
                      ]}
                      to="#"
                    >
                      Team
                    </SidebarMenuItem>
                    <SidebarMenuItem
                      active
                      icon={<FaCog className="d-block" />}
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
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};
