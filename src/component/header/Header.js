import React, { Component } from 'react';
import Searchbar from './Searchbar'
import { NavLink } from "react-router-dom"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Tooltip } from '@material-ui/core';
import PersistentDrawerLeft from './Drawer';
import axios from 'axios';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
    forceRefresh: true
});
const location = history.location;
history.listen((location, action) => {
    console.log(action, location.pathname, location.state);
})

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedEvents: "Choose Your Event",
            dropdown: ["제목", "내용", "해쉬태그"],
            searchval: '',
            //   type: '',  // 검색조건의 type,
            user: localStorage.getItem('currentUser')
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleClick = (type) => {
        console.log('type', type);
        this.setState({ type: type })
    }

    handleChange = (event) => {
        // let fleldVal = event.target.value;
        console.log(event.target.value)
        this.setState({ searchval: event.target.value })
    }

    handleLogout(event) {
        localStorage.clear();
        this.state.user = "";
        history.push("/");
    };


    render() {
        const { user } = this.state
        return (
            <Navbar bg="primrary" variant="light">
                <PersistentDrawerLeft />
                <NavLink to="/">
                    <h1 style={{ margin: 20, color: "black", width: "max-content" }}>가담<br />가담</h1>
                </ NavLink>
                <div style={{ width: "100%" }}>
                    <div style={{ textAlign: "right" }}>
                        {user ? (
                            <div style={{ display: "inline-flex" }}>
                                <h3 style={{ margin: 20, color: "black" }}>{user}</h3>
                                {/* <NavLink to="/"> */}
                                    <Tooltip title="Add" placement="top-end">
                                        <Button onClick={this.handleLogout.bind(this)}>로그아웃</Button>
                                    </Tooltip>
                                {/* </NavLink> */}
                            </div>
                        ) : (
                                <div>
                                    <NavLink to="/login">
                                        <Tooltip title="Add" placement="top-end">
                                            <Button>로그인</Button>
                                        </Tooltip>
                                    </NavLink>
                                    <NavLink to="/register">
                                        <Tooltip title="Add" placement="top-end">
                                            <Button>회원가입</Button>
                                        </Tooltip>
                                    </NavLink>
                                </div>
                            )}

                    </div>
                    <div>
                        <Form style={{ display: "inline-flex", width: "70%" }}>
                            <UncontrolledDropdown setActiveFromChild inline>
                                <DropdownToggle tag="a" className="nav-link" caret>
                                    검색조건
                                        </DropdownToggle>
                                <DropdownMenu>
                                    {this.state.dropdown.map((item, i) =>
                                        <DropdownItem tag="a" key={item} onClick={() => this.handleClick(i)}>
                                            {item}
                                        </DropdownItem>)}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <FormControl type="text" placeholder="제목/내용/해쉬태그" onChange={this.handleChange.bind(this)} className="mr-sm-2" />
                            <NavLink to={`/searchresult/${this.state.type}/${this.state.searchval}`}>
                                <Button style={{ width: "max-content" }} outline color="primary">검색</Button>
                            </NavLink>
                        </Form>
                        {/* <Nav className="mr-auto"> */}
                        <NavLink to="/mypage">
                            <img src="https://gadam.s3.ap-northeast-2.amazonaws.com/assets/mypage.png" alt="btnImages" style={{ width: 50, height: 50, margin: 10 }} />
                        </NavLink>
                        <NavLink to="/chat">
                            <img src="https://gadam.s3.ap-northeast-2.amazonaws.com/assets/chat.png" alt="btnImages" style={{ width: 50, height: 50, margin: 10 }} />
                        </NavLink>
                        {/* </Nav> */}
                    </div>
                </div>
            </Navbar>
        )
    }
}

export default Header