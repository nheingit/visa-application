import React, { useState, useContext } from "react";
import { useHistory, useParams } from "react-router";
import { ContactListContext } from "../context";
import { ContactCard } from "../components/ContactCard";
import { v4 as uuid } from "uuid";

import { useLocation } from "react-router";
import { Contact } from "../types/Types";
import { Router } from "react-router-dom";


export const EditContact = ({ contacts }: { contacts: Contact[] }) => {
const { id }:{id:string} = useParams();
console.log(id)
  const [contact, setContact] = useContext(ContactListContext)
  const history = useHistory();
  const editedCard = contacts.find((contact) => contact.id == id);

  const [firstName, setFirstName] = useState("firstName");
  const [email, setEmail] = useState("email@email.com");
  const [phoneNumber, setPhoneNumber] = useState(1234567891);
  const [lastName, setLastName] = useState("lastName");
  //@ts-ignore
  


  const HandleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
    const newArray = contacts.filter((contact) => contact.id !== id)
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
        <h1 className="text-4xl p-8">Edit Cards</h1>
      <div className="p-8">
        <div className="mb-12">
            <h2 className="text-2xl">Current Card</h2>
          <ContactCard
            id={editedCard!.id}
            lastName={editedCard!.lastName}
            firstName={editedCard!.firstName}
            phoneNumber={editedCard!.phoneNumber}
            email={editedCard!.email}
          />
        </div>
        <h2 className="text-2xl">New Card</h2>
        <ContactCard
          id={editedCard!.id}
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
          <button className="bg-red-400 mb-5 py-2 px-11" type="submit">Submit Edit</button>
        </form>
        <button type="button" onClick={()=> {history.push("/")}} className="bg-blue-400 py-2 px-16 ">Home</button>
      </div>
    </div>
  );
};
