import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from "classnames";
import { createStaffDetails, getStaffDetails } from '../../actions/staffActions';
import axios from 'axios';
import ReactLoading from 'react-loading';

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobile: '',
            occupation: '',
            errors: {},
        }
        
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        
        return (
            <div className="mid container">
                <h3>Add, delete and view table view of staff details here! </h3>
            </div>
        );
    }
}


export default Staff;