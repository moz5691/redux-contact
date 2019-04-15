import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {deleteContact} from "../../actions/contactActions";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

class Contact extends Component {

  state = { showContactInfo: false};

  handleDelete = (id) =>{
    console.log('delete id', id);
    this.props.deleteContact(id);

  };

  render() {
    const {id, name, email, phone} = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div>
        <h4>Name: {name}
        <span>
          <button onClick={()=>this.setState({showContactInfo: !showContactInfo})}>
            {showContactInfo ? "hide" : "show"}</button>
          <button onClick={()=>this.handleDelete(id)}>Delete</button>
          <Link to={`contact/edit/${id}`}>
            <button>Edit</button>
          </Link>

        </span>


        </h4>

          {showContactInfo ?
            <ul>
              <li>Email: {email}</li>
              <li>Phone: {phone}</li>
            </ul>
            : null}

      </div>
    );
  }
}

Contact.propTypes ={
  contact: PropTypes.object.isRequired
};


export default connect(null,{deleteContact})(Contact);