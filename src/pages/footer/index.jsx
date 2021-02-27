import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Row>
                    <Col className="text-left">HYTEAM &copy;2015-{new Date().getFullYear()}</Col>
                    <Col className="text-right"><a href="https://beian.miit.gov.cn/">浙ICP备19018912号-2</a></Col>
                </Row>
            </div>
        );
    }
}

export default Footer;  