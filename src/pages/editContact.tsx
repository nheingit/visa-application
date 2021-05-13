import React, { useState, useContext, ChangeEvent } from "react";
import { useHistory, useParams } from "react-router";
import { ContactListContext } from "../context";
import { ContactCard } from "../components/ContactCard";
import { Contact } from "../types/Types";

export const EditContact = ({ contacts }: { contacts: Contact[] }) => {
  const { id }: { id: string } = useParams();
  const [contact, setContact] = useContext(ContactListContext);
  const history = useHistory();
  const editedCard = contacts.find((contact) => contact.id === id);

  const [formState, setFormState] = useState({
    firstName: "first",
    lastName: "last",
    email: "email@email.com",
    phoneNumber: 1234567899,
  });

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newArray = contacts.filter((contact) => contact.id !== id);
    console.log(newArray);
    const newContact: Contact = {
      id: editedCard!.id,
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      phoneNumber: formState.phoneNumber,
    };
    newArray.push(newContact);
    //@ts-ignore
    setContact(newArray);
    alert("Successfully Edited Card!");
    history.push("/");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

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
          lastName={formState.lastName}
          firstName={formState.firstName}
          phoneNumber={formState.phoneNumber}
          email={formState.email}
        />
      </div>

      <div className="mx-8 p-8 max-w-2xl py-4 px-8 bg-gray-200 shadow-lg rounded-lg">
        <form onSubmit={HandleSubmit}>
          <div>
            <label> First Name: </label>
            <input
              name="firstName"
              className="mb-4"
              type="text"
              value={formState.firstName}
              onChange={handleChange}
            />
            <br />
            <label>Last Name:</label>
            <input
              name="lastName"
              type="text"
              value={formState.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="flex align-middle my-4">
            <label>Email: </label>
            <input
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <label> Phone Number: </label>
            <input
              name="phoneNumber"
              type="Number"
              value={formState.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <button className="bg-red-400 mb-5 py-2 px-11" type="submit">
            Submit Edit
          </button>
        </form>
      </div>
    </div>
  );
};
