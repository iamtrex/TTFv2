import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.css';


class Start extends Component {
    render(){
        return(
            <div>
                <div>This is overview page</div>
                <a href={"/start"}>Go to Start</a>

            </div>
        )
    }
}

export default Start;
