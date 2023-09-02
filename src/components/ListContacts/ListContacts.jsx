import React, { Component } from 'react';
import ElementList from 'components/ElementList/ElementList';
import Filter from 'components/Filter/Filter';
import { Container, Title } from './ListContactsStyle';

class ListContacts extends Component {
  render() {
    const { contacts, filter, onFilterChange, onContactDelete } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <Title>Contacts:</Title>
        <Filter value={filter} onChange={onFilterChange} />
        <ul>
          {filteredContacts.map(contact => (
            <ElementList
              contact={contact}
              key={contact.id}
              onDelete={() => onContactDelete(contact.id)}
            />
          ))}
        </ul>
      </Container>
    );
  }
}

export default ListContacts;
