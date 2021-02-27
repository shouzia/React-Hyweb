import React, { Component } from 'react';

// 组件
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


import icon from '../../assets/logo.jpg'

class Donwload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dlApp: [
                { href: "https://108878.xyz/", title: "幻影Pin-v1.75" },
                { href: "https://108878.xyz/", title: "幻影Pin-v4.0" },
                { href: "https://108878.xyz/", title: "幻影Pin-v4.2" },
                { href: "https://108878.xyz/", title: "幻影Wifi-v2.995" },
                { href: "https://108878.xyz/", title: "幻影Pin驱动自动切换工具" },
                { href: "https://108878.xyz/", title: "CDLinux" },
                { href: "https://108878.xyz/", title: "Kali Linux" },
            ]
        }
    }
    render() {
        const { dlApp } = this.state;
        return (
            <div id={"Download"} className="bg">
                <div className="py-3">
                    <Row className="m-auto max">
                        <Col>
                            <div className="textcolor my-4">
                                <h2>幻影科技</h2>
                                <p>幻影Pin是一款通过跑Pin绕过密码输入的Wifi破解软件。</p>
                            </div>
                            <div>
                                <Row className="text-center">
                                    {
                                        dlApp.map((item, index) => {
                                            return (
                                                <Col className="mb-3 button" key={item.title}>
                                                    <Button className="button" variant="outline-light" onClick={e => { this.DonwApp(item.href); }}>{item.title}</Button>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </Col>
                        <Col className="text-center align-self-center">
                            <img src={icon} alt="" width="240px" height="240px" />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

    DonwApp(href) {
        window.location.href = href;
    }
}

export default Donwload;