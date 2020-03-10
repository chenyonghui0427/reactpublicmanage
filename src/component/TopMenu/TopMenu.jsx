
import React, { Component } from 'react';
import { Avatar } from 'antd';
import { MenuFoldOutlined, UserOutlined } from "@ant-design/icons"
import TopMenuCss from './TopMenu.module.css'
class TopMenu extends Component {
    render() {
        return (
            <div className={TopMenuCss.top_content}>
                <MenuFoldOutlined className={TopMenuCss.collapse} />

                <Avatar className={TopMenuCss.avatar} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </div>
        )
    }
}
export default TopMenu 