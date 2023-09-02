import React, { Component } from 'react';
import { Input, Label } from './FilterStyle';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <Label>
          Find contacts by name
          <Input type="text" name="value" value={value} onChange={onChange} />
        </Label>
      </div>
    );
  }
}

export default Filter;
