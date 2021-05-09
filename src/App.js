import { useState } from 'react';

import { ContactCard } from './components/ContactCard';
import { Contacts } from './static/Contacts';



function App() {

let changeableContacts = Contacts

let [contacts, setContacts] = useState(changeableContacts)
console.log("this is the state of changablecontacts: ", changeableContacts)
console.log("this is my state: ", contacts)
console.log("this is the state of changablecontacts: ", contacts)

  return (
    <>
   <div className="p-8">
      {contacts.map(contact=>(
        <div key={contact.id} className="mb-8">
        <ContactCard
        firstName={contact.firstName}
        lastName={contact.lastName}
        phoneNumber={contact.phoneNumber}
        email={contact.email}/>
        </div>
      ))}
    </div>
    <button onClick={(e)=> {
      e.preventDefault();
      let newContacts = contacts.concat([{id: 5, firstName: "joe", lastName: "schupp", phoneNumber: 1231231234, email: "email@dodo.com"}])
      setContacts(newContacts);
      console.log(contacts)
    }
      }> add joe</button>
    </>
  
  );
}

export default App;
