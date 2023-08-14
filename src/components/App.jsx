import ElementList from "./ElementList/ElementList";
import Filter from "./Filter/Filter";
import FormContacts from "./FormContacts/FormContacts";

let state = {
  contacts: [],
  name: '',
  number: '',
 }
 
export const App = () => {
  return (
    <>
    <h1>Phonebook</h1>
      <FormContacts options={state}/>
      {/* <ElementList /> */}
      <Filter />
    </>
  );
};
