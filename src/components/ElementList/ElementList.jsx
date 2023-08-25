import React, { Component } from 'react';

class ElementList extends Component {
  render() {
    const { contact, onDelete } = this.props;
    return (
      <div>
        <li>
          {contact.name}: {contact.number}
          <button onClick={onDelete}>Delete</button>
        </li>
      </div>
    );
  }
}
export default ElementList;
