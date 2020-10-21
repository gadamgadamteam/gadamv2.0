import React, { useState } from 'react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

const Searchbar = (props) => {
  const [splitButtonOpen, setSplitButtonOpen] = useState(true);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  return (
    <div display="inline-block" className="container-sm">
      <InputGroup>
        <InputGroupButtonDropdown addonType="prepend" isOpen={splitButtonOpen} toggle={toggleSplit}>
          <Button outline>검색 조건</Button>
          <DropdownToggle split outline />
          <DropdownMenu>
            <DropdownItem >제목</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>본문+내용</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>해쉬태그</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input placeholder="제목/해쉬태크/본문+내용" />
        <InputGroupAddon addonType="append"><Button color="secondary">검색</Button></InputGroupAddon>
      </InputGroup>
    </div>
  );
}


export default Searchbar;