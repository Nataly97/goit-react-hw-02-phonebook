import FormContacts from './FormContacts/FormContacts';

let state = {
  contacts: [],
  name: '',
  number: '',
};

export const App = () => {
  return (
    <>
      <FormContacts options={state} />
    </>
  );
};
