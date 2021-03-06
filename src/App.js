import { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ContactListContext } from "./context";
import { HomePage } from "./pages/HomePage";
import { ViewPage } from "./pages/viewContact";
import { EditContact } from "./pages/editContact";
import { CreateContact } from "./pages/createContact";

function App() {
  const [contacts, setContacts] = useContext(ContactListContext);
  return (
    <Router>
      <div className="bg-gray-300 min-h-screen pb-4">
        <div className="mb-10 bg-gradient-to-r from-visa-blue via-gray-500 to-visa-gold p-4">
          <a href="/" className="text-4xl text-white">
            Visa Technical Application
          </a>
        </div>
        <Route
          path="/create"
          render={() => <CreateContact contacts={contacts} />}
        />
        <Route
          path="/"
          exact
          render={(props) => <HomePage {...props} contacts={contacts} />}
        />
        <Route
          path="/view/:id"
          render={(props) => <ViewPage {...props} contacts={contacts} />}
        />
        <Route
          path="/edit/:id"
          render={(props) => <EditContact {...props} contacts={contacts} />}
        />
      </div>
    </Router>
  );
}

export default App;
