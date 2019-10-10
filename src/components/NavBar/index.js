import React from 'react';
import { Menu, Icon } from 'antd';

export default class NavBar extends React.Component {
    state = {
        current: 'one',
    }

    handleClick = (e) => {
        this.setState({current: e.key})
    }

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="one">
                    <Icon type="mail" />
                    Navigation One
                </Menu.Item>
                <Menu.Item key="two">
                    <Icon type="appstore" />
                    Navigation Two
                </Menu.Item>
                <Menu.Item key="three">
                    <Icon type="mail" />
                    Navigation three
                </Menu.Item>
                <Menu.Item key="four">
                    Navigation four
                </Menu.Item>
            </Menu>
        )
    }
}