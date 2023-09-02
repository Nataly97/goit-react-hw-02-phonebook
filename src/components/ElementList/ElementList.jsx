import React, { Component } from 'react';
import { Button, ElementoList } from './ElementListStyle';

class ElementList extends Component {
  render() {
    const { contact, onDelete } = this.props;
    return (
      <div>
        <ElementoList>
          {contact.name}: {contact.number}
          <Button onClick={onDelete}>Delete</Button>
        </ElementoList>
      </div>
    );
  }
}
export default ElementList;
