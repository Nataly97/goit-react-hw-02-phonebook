import ElementList from 'components/ElementList/ElementList';
import React, { Component } from 'react';

class ListContacts extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <h1>Contacts:</h1>
        <ul>
          {contacts.map(contact => (
            <ElementList contact={contact} key={contact.id} />
          ))}
        </ul>
      </div>
    );
  }
}
export default ListContacts;
