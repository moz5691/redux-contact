import React, {Component} from 'react';
import Contact from './Contact';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
//
// import {GET_CONTACTS} from "../../actions/types";
import {getContacts} from "../../actions/contactActions";

class Contacts extends Component {

  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '444-444-4444'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '333-333-333'
      }
    ]
  };

  componentDidMount() {
    this.props.getContacts();
  }

  render() {

    const {contacts} = this.props;

    return (
      <>
        <h1>Contact</h1>
        {contacts ? contacts.map(contact => <Contact key={contact.id} contact={contact}/>) : null}
      </>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};


const mapStateToProps = ({contact}) => {
  return {contacts : contact.contacts};
};

// const mapDispatchToProps = (dispatch) => {
//   return(
//     {getContacts: ()=> dispatch({type: GET_CONTACTS})}
//   )
// };

export default connect(mapStateToProps, {getContacts})(Contacts);