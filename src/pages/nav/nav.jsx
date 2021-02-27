import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import icon from '../assets/logo.jpg'


class nav extends Component {

    constructor(props) {
        super(props);
        this.state = {

            Navarr: [
                { Navtitle: "下载", Navhref: "Download" },
                { Navtitle: "特性", Navhref: "Features" },
                { Navtitle: "文档与技术", Navhref: "Docs" },
                { Navtitle: "技术支持", Navhref: "Technical" },
            ]
        }
    }


    scrollToAnchor = (anchorName) => {

        console.log(anchorName);
        if (anchorName) {

            // 找到锚点

            let anchorElement = document.getElementById(anchorName);

            // 如果对应id的锚点存在，就跳转到锚点

            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }

        }
    }
    render() {
        const { Navarr } = this.state;
        return (
            <div className="Headerd-navbar">
                <Navbar expand="lg" variant="dark"  >
                    <Navbar.Brand href="#home">
                        <img
                            alt="logo"
                            src={icon}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        幻影官网
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link> */}
                            {
                                Navarr.map((item, index) => {
                                    return (
                                        <Nav.Link onClick={() => { this.scrollToAnchor(item.Navhref) }} key={item.Navtitle}>{item.Navtitle}</Nav.Link>
                                    )
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>




                {/* <div id={"Docs"} ></div> */}
            </div>
        );
    }
}

export default nav;