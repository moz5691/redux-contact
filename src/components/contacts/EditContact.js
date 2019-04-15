import React, {Component} from 'react';
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getContact, editContact} from "../../actions/contactActions";

class EditContact extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps, nextContext) {
    const {name, email, phone } = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    })
  }

  componentDidMount() {
    this.props.getContact(this.props.match.params.id);

  }

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


    // Todo: submit new contact

    const {id} = this.props.match.params;
    const updateContact = {
      id, name, email, phone
    };


    // console.log('new contact', updateContact);
    // console.log(this.props.match);
    this.props.editContact(updateContact);

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
          <button>Update</button>

        </form>

      </div>
    );
  }
}

EditContact.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return({
    contact: state.contact.contact
  });
};

export default connect(mapStateToProps, {getContact, editContact} )(EditContact);