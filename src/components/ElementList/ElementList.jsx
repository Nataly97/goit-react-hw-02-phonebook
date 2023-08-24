import React, { Component } from 'react';

class ElementList extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div>
        <li>
          {contact.name}: {contact.number}
        </li>
      </div>
    );
  }
}
export default ElementList;
