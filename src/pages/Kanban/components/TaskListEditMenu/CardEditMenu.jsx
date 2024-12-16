import React from 'react';
import { Button, Popover, Menu, MenuItem } from 'evergreen-ui';
import { Position } from 'evergreen-ui';
import {
  CircleArrowRightIcon,
  EditIcon,
  PeopleIcon,
  TrashIcon,
} from 'evergreen-ui/icons';

const CardEditMenu = () => {
  return (
    <Popover
      position={Position.BOTTOM_LEFT}
      content={
        <Menu>
          <Menu.Group>
            <Menu.Item icon={PeopleIcon}>Edit</Menu.Item>
            <Menu.Item icon={CircleArrowRightIcon}>Delete</Menu.Item>
            <Menu.Item icon={EditIcon} secondaryText="⌘R">
              Clear All
            </Menu.Item>
          </Menu.Group>
        </Menu>
      }
    >
      <Button>Card Actions</Button> {/* Trigger button */}
    </Popover>
  );
};

export default CardEditMenu;
