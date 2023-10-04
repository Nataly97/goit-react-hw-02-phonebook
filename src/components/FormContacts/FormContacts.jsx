import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListContacts from 'components/ListContacts/ListContacts';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Container } from './FormContactsStyle';
import FormData from './FormData';

class FormContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    handleSubmit: PropTypes.func,
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    // number: '',
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number, contacts } = this.state;

    if (name && number) {
      const existingContact = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (existingContact) {
        Notiflix.Notify.failure(`${name} is already in contacts `);
        return;
      }

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      const updatedContacts = [...this.state.contacts, newContact];
      this.setState({ contacts: updatedContacts, name: '', number: '' });
      console.log(this.state);
    }
  };

  // Método para filtrar la lista de contactos
  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  //Método que elimina un contacto por su ID y actualiza el estado del componente con los nuevos datos
  handleContactDelete = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { name, number, contacts, filter } = this.state;
    return (
      <Container>
        <FormData
          numberForm={number}
          nameForm={name}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ListContacts
          contacts={contacts}
          filter={filter}
          onFilterChange={this.handleFilterChange}
          onContactDelete={this.handleContactDelete}
        />
      </Container>
    );
  }
}
export default FormContacts;
