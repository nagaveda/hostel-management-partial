import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from "classnames";
import { createRoomAction, getRoomAction } from '../../actions/roomActions';
import axios from 'axios';
import ReactLoading from 'react-loading';

class RoomAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            block: this.props.match.params.id,
            id: '',
            type: '',
            incharge: '',
            time: '',
            gender: '',
            errors: {},
        }
        
    }
    
    
    render() {
        
        return (
            <div className="mid container">
                <h3>{`Add all complaints regarding cleaning and repairs in block ${this.props.match.params.id} here...`}</h3>
            </div>
        );
    }
}


export default RoomAction;