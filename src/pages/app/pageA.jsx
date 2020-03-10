
import React, { Component } from 'react';
let dataArr = [1, 2, 31, 2, 3, 21, 3, 12, 3, 12, 3, 12, 3, 21, 3, 12, 3, 21, 3, , 21, 3, 12, 3, 12, 3, 12, 3, 12, 3, 21, 3, , 21, 3, 21, 3, 12, 3, 12, 3, 21, 3, 1, 3, 12, 3, 21, 3, 21, 3, 12, 3, 12, 3, 12, 3, 12, 3, 12, 3, 2131, 1231]
class PageA extends Component {

    render() {
        return (
            <div>
                {
                    (dataArr.length == 0)
                        ? null
                        : dataArr.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='b_o_t_one_2'>
                                        <span>手机号码:</span>
                                        <span>{item}</span>
                                        <span>短号:</span>
                                        <span>{item}</span>
                                    </div>
                                </div>
                            )
                        }, this)
                }
            </div>
        )
    }
}
export default PageA