import React, { Component } from 'react';

import '../style.css'
import './Header.css'
import{
    Link
} from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div>

                <Link class="btn-link-btn" to="/">Home</Link>
                <Link class="btn-link-btn" to="/income">Income</Link>

            </div>
        );
    }
}

export default Header;
