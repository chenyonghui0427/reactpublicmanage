
import React, { Component } from 'react';
import LeftMenu from '../../component/LeftMenu/LeftMenu'
import TopMenu from '../../component/TopMenu/TopMenu'
import CRoutes from '../../routes/index'
import LayOutCss from './LayOut.module.css'
import BreadCrumb from '../../component/BreadCrumb/BreadCrumb'
import BottomFooter from '../../component/BottomFooter/BottomFooter'


class LayOut extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        console.log(this.props.auth);
        return (
            <div className={LayOutCss.container}>
                {/* <div className={LayOutCss.content}> */}
                <LeftMenu />
                <div className={LayOutCss.content}>
                    <TopMenu />
                    <BreadCrumb />
                    <div className={LayOutCss.main_content}>
                        <div className={LayOutCss.main_content_view}>
                            <CRoutes />
                        </div>
                    </div>
                    <BottomFooter />
                </div>
                {/* </div> */}
            </div>
        )
    }
}
export default LayOut 