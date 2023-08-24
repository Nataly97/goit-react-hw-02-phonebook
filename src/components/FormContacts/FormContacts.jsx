import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListContacts from 'components/ListContacts/ListContacts';
import { nanoid } from 'nanoid';

class FormContacts extends Component {
  static defaultProps = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    handleSubmit: () => ({}),
  };

  static propTypes = {
    contacts: PropTypes.array,
    handleSubmit: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts,
      name: '',
      number: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    // console.log(this.state);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { name, number } = this.state;
    if (name && number) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      const updatedContacts = [...this.state.contacts, newContact];
      // console.log('new',updatedContacts );
      this.setState({ contacts: updatedContacts, name: '', number: '' });
      console.log(this.state);
      // console.log(this.id);
    }
  }

  render() {
    const { name, number, contacts } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              // id={this.contactId()}
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}
export default FormContacts;
