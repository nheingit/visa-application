import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { ContactListContext } from "../context";
import { ContactCard } from "../components/ContactCard";
import { v4 as uuid } from "uuid";

import { useLocation } from "react-router";
import { Contact } from "../types/Types";

export const EditContact = ({ contacts }: { contacts: Contact[] }) => {

  const [contact, setContact] = useContext(ContactListContext)
  const location = useLocation();
  const history = useHistory();
  // the 6 will take care of  the /edit/ portion of the pathname leaving me with the contact id that we clicked on.
  const cardId = location.pathname.substring(6);
  const editedCard = contacts.find((contact) => contact.id == cardId);

  const [firstName, setFirstName] = useState("firstName");
  const [email, setEmail] = useState("email@email.com");
  const [phoneNumber, setPhoneNumber] = useState(1234567891);
  const [lastName, setLastName] = useState("lastName");
  const [id, setId] = useState(uuid());


  const HandleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
    const newArray = contacts.filter((contact) => contact.id !== cardId)
    const newContact:Contact = {
        id: editedCard!.id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
    }
    newArray.push(newContact)
    //@ts-ignore
    setContact(newArray);
  };

  return (
    <div className="bg-gray-300">
      <div className="p-8">
        <div className="mb-12">
          <ContactCard
            id={editedCard!.id}
            lastName={editedCard!.lastName}
            firstName={editedCard!.firstName}
            phoneNumber={editedCard!.phoneNumber}
            email={editedCard!.email}
          />
        </div>
        <ContactCard
          id={id}
          lastName={lastName}
          firstName={firstName}
          phoneNumber={phoneNumber}
          email={email}
        />
      </div>

      <div className="mx-8 p-8 max-w-2xl py-4 px-8 bg-gray-200 shadow-lg rounded-lg">
        <form onSubmit={HandleSubmit}>
          <div>
            <label> First Name: </label>
            <input className="mb-4"
              type="text"
              value={firstName}
              onChange={(e: any) => setFirstName(e.target.value)}
            />
            <br/>
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e: any) => setLastName(e.target.value)}
            />
          </div>

          <div className="flex align-middle my-4">
            <label>Email: </label>
            <input
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
            <label> Phone Number: </label>
<input
            type="Number"
            value={phoneNumber}
            onChange={(e: any) => setPhoneNumber(e.target.value)}
          />
          </div>
          <button className="bg-red-400 mb-5 py-2 px-10" type="submit">Submit</button>
        </form>
        <button type="button" onClick={()=> {history.push("/")}} className="bg-blue-400 py-2 px-11 ">Home</button>
      </div>
    </div>
  );
};
