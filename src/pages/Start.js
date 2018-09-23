import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';


class Start extends Component {
    render(){
        return(
            <div>
                <div>This is start page</div>
                <a href={"/Overview"}>Go to Overview</a>


            </div>
        )
    }
}

export default Start;
