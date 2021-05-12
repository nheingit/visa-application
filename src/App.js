import { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { ContactListContext, ContactListProvider } from "./context";
import { HomePage } from "./pages/HomePage";
import { ViewPage } from "./pages/viewContact";
import { EditContact } from "./pages/editContact";

function App() {

  const [contacts, setContacts] = useContext(ContactListContext);
  console.log(contacts,)
  console.log("this is my contacts context", contacts)
  return (
      <Router>
        <div className="bg-gray-300 min-h-screen pb-4">
        <div className="bg-gradient-to-r from-visa-blue via-gray-500 to-visa-gold p-4">
          <a href="/" className="text-4xl text-white">Visa Technical Application</a>
        </div>
          <Route path="/" exact render={(props) => <HomePage {...props} contacts={contacts}/> }/>
          <Route path="/view/:id" render={(props) => <ViewPage {...props} contacts={contacts}/>}/>
          <Route path="/edit/:id" render={(props) => <EditContact {...props} contacts={contacts}/>}/>
        </div>
      </Router>
  );
}

export default App;
