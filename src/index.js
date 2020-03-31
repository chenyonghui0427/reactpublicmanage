import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './pages/Layout/Page';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function Hello(props) {

    console.log(props)

    return <div>212{props.name}</div>
}

const user = {
    name: 'Tim',
    age: 24
}

ReactDOM.render(<div>

    <Hello {...user}></Hello>

</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

