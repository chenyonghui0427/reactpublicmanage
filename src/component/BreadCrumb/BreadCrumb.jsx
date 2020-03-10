import React, { Component } from 'react'
import { Breadcrumb } from 'antd'
export default class BreadCrumb extends Component {
    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 20px' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}