import { Contact } from "../types/Types";
import { ContactCard } from "./ContactCard";

export const ContactCards = ({ contacts }: { contacts: Contact[] }) => {
  return (
    <div className="m-2">
      {contacts.map((contact: Contact) => (
        <div key={contact.id} className="p-8">
          <ContactCard
            id={contact.id}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phoneNumber={contact.phoneNumber}
            email={contact.email}
          />
        </div>
      ))}
    </div>
  );
};
