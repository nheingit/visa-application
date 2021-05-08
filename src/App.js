import { ContactCard } from './components/ContactCard';
import { Contacts } from './static/Contacts';

function App() {
  return (
   <div>
      {Contacts.map(contact=>(
        <div className="mb-8">
        <ContactCard
        firstName={contact.firstName}
        lastName={contact.lastName}
        phoneNumber={contact.phoneNumber}
        email={contact.email}/>
        </div>
      ))}
    </div>
  );
}

export default App;
