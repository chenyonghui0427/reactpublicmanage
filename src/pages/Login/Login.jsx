
import React, { Component } from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
// import {
//     Link
// } from 'react-router-dom'
import LoginCss from "./Login.module.css";



class Login extends Component {
    submit = () => {
        console.log("wqe")
        this.refs.line.style.border = "4px red solid"
    }
    render() {

        return (
            <div className={LoginCss.container}>
                <div className={LoginCss.right}>
                    <div className={LoginCss.login_container}>
                        <div ref="line" className={LoginCss.line} onClick={this.submit}>22</div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Login 