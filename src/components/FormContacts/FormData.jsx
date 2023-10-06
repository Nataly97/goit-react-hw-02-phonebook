import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button, Title } from './FormContactsStyle';

class FormData extends Component {
  static propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handelSubmitFormat = evt=>{
    evt.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({ name: '', number: '' })
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handelSubmitFormat}>
          <Title>Phonebook</Title>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.name}
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
              value={this.number}
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
