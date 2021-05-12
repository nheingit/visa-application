import React from "react";
import { Contact } from "../types/Types";

import { ContactCard } from "./ContactCard";

export const ContactCards = ({ contacts }:{contacts:Contact[]}, isShowing:boolean) => {
  return (
    <div className="m-2">
      {contacts.map((contact: Contact) => (
        <div className="p-8">
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
