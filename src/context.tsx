import React from "react";
import { createContext, useState } from "react";
import { Contacts } from "./static/Contacts";
import { Props } from "./types/Types";

export const ContactListContext = createContext(Contacts);

export const ContactListProvider = (props: Props) => {
  const [contacts, setContacts] = useState(() => {
    const data = localStorage.getItem("contact-list");
    if (data) {
      return JSON.parse(data);
    }
    return Contacts;
  });

  React.useEffect(() => {
    localStorage.setItem("contact-list", JSON.stringify(contacts));
  }, [contacts]);
  console.log("Here are contacts:", Contacts);
  return (
    //@ts-ignore
    <ContactListContext.Provider value={[contacts, setContacts]}>
      {props.children}
    </ContactListContext.Provider>
  );
};
