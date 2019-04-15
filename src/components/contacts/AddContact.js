import React, {Component} from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import {connect} from "react-redux";
import {addContact} from "../../actions/contactActions";
// import uuid from 'uuid'
import PropTypes from 'prop-types';

class AddContact extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {name, email, phone} = this.state;
    // Error check:
    if (name === ''){
      this.setState({errors: {name: 'Name is required'}});
      return;
    }

    if (email === ''){
      this.setState({errors: {email: 'Email is required'}});
      return;
    }

    if (phone === ''){
      this.setState({errors: {phone: 'Phone number is required'}});
      return;
    }

    const newContact = {
      // id: uuid(),
      name,
      email,
      phone
    };

    // Todo: submit new contact
    console.log('new contact', newContact);
    this.props.addContact(newContact);

    // clear form:
    this.setState({name: '', email: '', phone:''});
    this.props.history.push('/');
  };

  onChange = (e) => this.setState({[e.target.name]: e.target.value});


  render() {
    const {name, email, phone, errors} = this.state;
    return (
      <div>
        <h1>Add Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInputGroup
            label="Name"
            name= "name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={this.onChange}
            error={errors.name}
          />
          <TextInputGroup
            label="Email"
            name= "email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={this.onChange}
            error={errors.email}
          />
          <TextInputGroup
            label="Phone"
            name= "phone"
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={this.onChange}
            error={errors.phone}
          />
          <button>Submit</button>

        </form>

      </div>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default connect(null, {addContact})(AddContact);