import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button, Title } from './FormContactsStyle';

class FormData extends Component {
  static propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Title>Phonebook</Title>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.nameForm}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={this.numberForm}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

export default FormData;
