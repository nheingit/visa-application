import { useContext, useState } from "react";
import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {v4 as uuid} from "uuid";

import { ContactListContext, ContactListProvider } from "./context";
import { ContactCards } from "./components/ContactCards";
import { HomePage } from "./components/HomePage";
import { CreateContact } from "./pages/createContact";
import { EditContact } from "./pages/editContact";
import { AddCard } from "./utilities/add";

function App() {

  const [contacts, setContacts] = useContext(ContactListContext);
  const [openStatus, setOpenStatus] = useState(false);
  console.log(contacts,)
  console.log("this is my contacts context", contacts)
  return (
      <Router>
        <div className="bg-gray-50">
        <div className="bg-gradient-to-r from-visa-blue via-gray-500 to-visa-gold mb-4 p-4">
          <a href="/" className="text-4xl text-white">Visa Technical Application</a>
        </div>
          <Route path="/" exact render={(props) => <HomePage {...props} contacts={contacts}/> }/>
          <Route path="/edit" render={(props) => <EditContact {...props} contacts={contacts}/>}/>
          <button
            onClick={() => {
              let newContacts = contacts.concat([
                {
                  id: uuid(),
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
          <button onClick={AddCard(contacts)}>addFunction</button>
        </div>
      </Router>
  );
}

export default App;
