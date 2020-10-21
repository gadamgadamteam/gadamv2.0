// simple searchbar
import React, { useState } from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
   } from 'reactstrap';
  
  const Searchbar= (props) => {
    return (
      <div>
        <InputGroup>
          <Input />
          <InputGroupAddon addonType="prepend"><Button>검색</Button></InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
  
  
  export default Searchbar;