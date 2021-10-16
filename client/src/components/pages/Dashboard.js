import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/authActions";


// const clean = require("../../img/cleaning.jpg");
const student = require("../../img/student.png");
const staff = require("../../img/staff.png");
const bedRoom = require("../../img/bedroom.png");
class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="mid container">
        <div className="text-center" style={{ fontSize: "25px" }}>
          Welcome {user.name}!
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>

          <div className="card hoverable" style={{ width: "18rem", hover: '', height: '22rem' }}>
            <img src={student} className="card-img-top" style={{height:"70%"}} alt="Cleaning" />
            <div className="card-body" style={{ height: '10rem' }}>
              <h5 className="card-title">Students Info</h5>
              <a href="/student" className="card-text">
                Add new Students and allot Room or Check Info
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", hover: '', height: '22rem' }}>
            <img src={bedRoom} className="card-img-top" style={{height:'70%'}} alt="Cleaning" />
            <div className="card-body">
              <h5 className="card-title">Maintenance</h5>
              <a href="/block">
                Room Repair/Cleaning info
                </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem", hover: '', height: '22rem' }}>
            <img src={staff} className="card-img-top" style={{height:"150%"}} alt="Cleaning" />
            <div className="card-body">
              <h5 className="card-title">Staff Info</h5>
              <a href="/staff">
                Add more Staff or Check their info
              </a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // getCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
  ,
  { getCurrentUser }
)(Dashboard);
