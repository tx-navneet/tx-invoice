import { Button, Popover } from 'bootstrap/dist/js/bootstrap.bundle.min'
import { Menu, toaster } from 'evergreen-ui'
import { Position } from 'evergreen-ui/types'
import React from 'react'

const DropdownModel = () => {
  return (
   <>
   <Popover
  position={Position.BOTTOM_LEFT}
  content={
    <Menu>
      <Menu.Group>
        <Menu.Item onSelect={() => toaster.notify('Share')}>Share...</Menu.Item>
        <Menu.Item onSelect={() => toaster.notify('Move')}>Move...</Menu.Item>
        <Menu.Item onSelect={() => toaster.notify('Rename')} secondaryText="⌘R">
          Rename...
        </Menu.Item>
      </Menu.Group>
      <Menu.Divider />
      <Menu.Group>
        <Menu.Item onSelect={() => toaster.danger('Delete')} intent="danger">
          Delete...
        </Menu.Item>
      </Menu.Group>
    </Menu>
  }
>
  <Button marginRight={16}>Without Icons</Button>
</Popover></>
  )
}

export default DropdownModel