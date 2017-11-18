import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DateAndTime from './App';
import Btn from './App';
import registerServiceWorker from './registerServiceWorker';
// import Button from './App';
import {Clock} from './App';
import Counter from './App';

const headingStyle = {
    backgroundColor: 'lightcyan',
    color: 'lightcoral'
}
class HelloWorld extends React.Component{
    render(){
        let holaMandu = <h1>Hello World</h1>
        return(
            <Counter />
        );
    }
}
ReactDOM.render(<HelloWorld />, document.getElementById('root'));
registerServiceWorker();
