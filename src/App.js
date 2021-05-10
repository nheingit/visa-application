import { useContext } from "react";
import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ContactListContext, ContactListProvider } from "./context";
import { ContactCard } from "./components/ContactCard";
import { Contacts } from "./static/Contacts";
import { CreateContact } from "./pages/createContact";
import { EditContact } from "./pages/editContact";

function App() {

  const [contacts, setContacts] = useContext(ContactListContext);
  console.log(contacts,)
  console.log("this is my contacts context", contacts)

  return (
      <Router>
        <>
          <Route path="/" exact component={CreateContact} />
          <Route path="/edit" exact component={EditContact} />
          <div className="p-8">
            {contacts.map((item) => (
              <div key={item.id} className="mb-8">
                <ContactCard
                  firstName={item.firstName}
                  lastName={item.lastName}
                  phoneNumber={item.phoneNumber}
                  email={item.email}
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              let newContacts = contacts.concat([
                {
                  id: 5,
                  firstName: "joe",
                  lastName: "schupp",
                  phoneNumber: 1231231234,
                  email: "email@dodo.com",
                },
              ]);
              setContacts(newContacts);
            }}
          >
            {" "}
            add joe
          </button>
        </>
      </Router>
  );
}

export default App;
