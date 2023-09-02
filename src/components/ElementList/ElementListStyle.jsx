import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: red;
  border-radius: 5px;
  width: auto;
  height: 30px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  margin-left: 10px;
`;

const ElementoList = styled.li`
  margin-bottom: 15px;
  font-size: 20px;
`;

export { Button, ElementoList };
