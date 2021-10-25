import { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';

export const CreateNewSiteButtons = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
		<div className="create-btn">
		<Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
			<DropdownToggle caret color="primary">
				+　Create a new site
			</DropdownToggle>
			<DropdownMenu>
				<DropdownItem>Shifter Static</DropdownItem>
				<DropdownItem>Shifter Headless</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	</div>
  );
};
