import styled from 'styled-components';

const Input = styled.input`
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  font-size: 15px;
  width: 250px;
  height: 30px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 15px;
  color: orange;
  font-size: 20px;
`;

export { Input, Label };
