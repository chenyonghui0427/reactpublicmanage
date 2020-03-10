import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import LeftMenuCss from './LeftMenu.module.css'
import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
const { SubMenu } = Menu;
class LeftMenu extends Component {
    render() {
        return (
            <div className={LeftMenuCss.content} style={{ width: 250 }}>
                <div className={LeftMenuCss.container}>
                    <div className={LeftMenuCss.logo}></div>
                    <Menu
                        theme="dark"
                        onClick={this.handleClick}
                        style={{ width: 250 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <MailOutlined />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Menu.ItemGroup key="g1" title="Item 1">
                                <Menu.Item key="1">
                                    <Link to="/app/pageA">Option 1</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/app/pageB">Option 2</Link>
                                </Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup key="g2" title="Item 2">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <AppstoreOutlined />
                                    <span>Navigation Two</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <SettingOutlined />
                                    <span>Navigation Three</span>
                                </span>
                            }
                        >
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                                <span>
                                    <SettingOutlined />
                                    <span>Navigation Three</span>
                                </span>
                            }
                        >
                            <Menu.Item key="13">Option 9</Menu.Item>
                            <Menu.Item key="14">Option 10</Menu.Item>
                            <Menu.Item key="15">Option 11</Menu.Item>
                            <Menu.Item key="16">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}
export default LeftMenu 