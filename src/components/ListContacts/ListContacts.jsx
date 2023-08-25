import React, { Component } from 'react';
import ElementList from 'components/ElementList/ElementList';
import Filter from 'components/Filter/Filter';

class ListContacts extends Component {
  render() {
    const { contacts, filter, onFilterChange, onContactDelete } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Contacts:</h1>
        <Filter value={filter} onChange={onFilterChange} />
        <ul>
          {filteredContacts.map(contact => (
            <ElementList contact={contact} key={contact.id} onDelete={() => onContactDelete(contact.id)} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ListContacts;