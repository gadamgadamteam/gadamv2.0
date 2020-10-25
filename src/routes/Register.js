import React from 'react';
import '../css/Register.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { Button, FormGroup} from '@material-ui/core'

const Register = (props) => {
  return (
    <div class="register">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="이메일" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="패스워드" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">닉네임</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="닉네임" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">성별</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>여성</option>
            <option>남성</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">연령대</Label>
          <Input type="select" name="select" id="exampleSelect" multiple>
            <option>10대</option>
            <option>20대</option>
            <option>30대</option>
            <option>40대</option>
            <option>50대</option>
            <option>60대 이상</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">전화번호</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="010-0000-0000" />
        </FormGroup>
        <Button>제출하기</Button>
      </Form>
    </div>
  );
}

export default Register;