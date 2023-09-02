import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: green;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  color: #ffffff;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`;

const Container = styled.div`
  display: block;
  width: 450px;
  height: auto;
  position: relative;
  left: 33%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

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
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 15px;
  color: royalblue;
  font-size: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  color: royalblue;
`;

export { Button, Container, Form, Input, Label, Title };
